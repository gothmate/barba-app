'use client'
import Image from 'next/image'
import Link from 'next/link'
import Menu from '../../shared/Menu'
import React from 'react'
import style from './page.module.sass'

export default function TituloSlogan() {
    return (
        <div className={style.titleContainer}>
            <Image src="/banners/principal.webp" fill alt="Barbearia" className={style.cover} />
            <div className={style.menuGroup}>
                <Menu />
                <div className={style.menuText}>
                    <h1 className={style.h1}>
                        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-thin tracking-wider">
                            Transformações
                        </span>
                        <span className="text-gradient text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black pb-2">
                            Lendárias
                        </span>
                    </h1>
                    
                    <Link
                        href="/agendamento"
                        className="
                            bg-gradient-to-r from-green-500 to-green-600
                            text-white font-semibold text-base md:text-lg
                            py-2 px-4 rounded-md hover:from-green-600 hover:to-green-700
                        "
                    >
                        Agendar Agora
                    </Link>
                </div>
            </div>
        </div>
    )
}
