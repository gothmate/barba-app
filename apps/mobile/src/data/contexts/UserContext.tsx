"use client"
import { createContext, useCallback, useEffect, useState } from "react"
import { User } from "@barba/core"
import useLocalStorage from "../hooks/useLocalStorage"

export interface UserContextProps {
  loading: boolean
  user: User | null
  login: (user: User) => Promise<void>
  logout: () => void
}

const UserContext = createContext<UserContextProps>({} as any)

export function UserProvider({ children }: any) {
  const { get, set } = useLocalStorage()
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<User | null>(null)

  const carregarUsuario = useCallback(
    async function () {
      try {
        const usuarioLocal = await get("usuario")
        if (usuarioLocal) {
          setUser(usuarioLocal)
        }
      } finally {
        setLoading(false)
      }
    },
    [get]
  )

  async function login(user: User) {
    setUser(user)
    await set("user", user)
  }

  function logout() {
    setUser(null)
    set("user", null)
  }

  useEffect(() => {
    carregarUsuario()
  }, [carregarUsuario])

  return (
    <UserContext.Provider
      value={{
        loading,
        user,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
