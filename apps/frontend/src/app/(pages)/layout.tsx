'use client'
import React from 'react'
import { UserProvider } from '../../data/contexts/UserContext'

export default function Layout({ children }: any) {
    return <UserProvider>{children}</UserProvider>
}
