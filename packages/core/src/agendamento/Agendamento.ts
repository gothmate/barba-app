import { Professional } from '../professional'
import { Service } from '../service'

export default interface Agendamento {
    id: number
    emailCliente: string
    data: Date
    profissional: Professional
    servicos: Service[]
}
