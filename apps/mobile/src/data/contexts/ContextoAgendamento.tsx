import { createContext, useCallback, useEffect, useState } from "react"
import { Professional, Service } from "@barba/core"
import { DataUtils } from "@barba/core"
import useUser from "../hooks/useUser"
import useAPI from "../hooks/useAPI"

interface ContextoAgendamentoProps {
  professional: Professional | null
  services: Service[]
  data: Date
  horariosOcupados: string[]
  duracaoTotal(): string
  precoTotal(): number
  quantidadeDeSlots(): number
  selecionarProfissional(professional: Professional): void
  selecionarServices(services: Service[]): void
  selecionarData(data: Date): void
  agendar(): Promise<void>
}

export const ContextoAgendamento = createContext({} as ContextoAgendamentoProps)

export function ProvedorAgendamento({
  children,
}: {
  children: React.ReactNode
}) {
  const [professional, setProfessional] = useState<Professional | null>(null)
  const [services, setServices] = useState<Service[]>([])
  const [data, setData] = useState<Date>(DataUtils.hoje())

  const { user } = useUser()
  const [horariosOcupados, setHorariosOcupados] = useState<string[]>([])
  const { httpGet, httpPost } = useAPI()

  function selecionarProfissional(professional: Professional) {
    setProfessional(professional)
  }

  function selecionarServices(services: Service[]) {
    setServices(services)
  }

  function duracaoTotal() {
    const duracao = services.reduce((acc, atual) => {
      return (acc += atual.qtSlots * 15)
    }, 0)

    return `${Math.trunc(duracao / 60)}h ${duracao % 60}m`
  }

  function precoTotal() {
    return services.reduce((acc, atual) => {
      return (acc += atual.price)
    }, 0)
  }

  const selecionarData = useCallback(function (hora: Date) {
    setData(hora)
  }, [])

  function quantidadeDeSlots() {
    const totalDeSlots = services.reduce((acc, service) => {
      return (acc += service.qtSlots)
    }, 0)

    return totalDeSlots
  }

  async function agendar() {
    if (!user?.email) return

    await httpPost("agendamentos", {
      customerEmail: user.email,
      data: data!,
      professional: professional!,
      services: services,
    })

    limpar()
  }

  function limpar() {
    setData(DataUtils.hoje())
    setHorariosOcupados([])
    setProfessional(null)
    setServices([])
  }

  const obterHorariosOcupados = useCallback(
    async function (data: Date, professional: Professional): Promise<string[]> {
      try {
        if (!data || !professional) return []
        const dtString = data.toISOString().slice(0, 10)
        const ocupacao = await httpGet(
          `agendamentos/ocupacao/${professional!.id}/${dtString}`
        )
        return ocupacao ?? []
      } catch (e) {
        return []
      }
    },
    [httpGet]
  )

  useEffect(() => {
    if (!data || !professional) return
    obterHorariosOcupados(data, professional).then(setHorariosOcupados)
  }, [data, professional, obterHorariosOcupados])

  return (
    <ContextoAgendamento.Provider
      value={{
        data,
        professional,
        services,
        horariosOcupados,
        duracaoTotal,
        precoTotal,
        selecionarData,
        selecionarProfissional,
        quantidadeDeSlots,
        selecionarServices,
        agendar,
      }}
    >
      {children}
    </ContextoAgendamento.Provider>
  )
}
