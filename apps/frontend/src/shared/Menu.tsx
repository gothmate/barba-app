'use client'

import Link from 'next/link'
import Logo from './Logo'
import UserMenu from './UserMenu'
import useUser from '../data/hooks/useUsers'
import React from 'react'
import style from './page.module.sass'

export default function Menu() {
    const { user } = useUser()

    return (
        <header className={style.header}>
            <nav className="flex items-center justify-between container">
                <Logo />
                <div>
                    {user ? (
                        <UserMenu user={user} />
                    ) : (
                        <Link href="/entrar">Entrar</Link>
                    )}
                </div>
            </nav>
        </header>
    )
}
