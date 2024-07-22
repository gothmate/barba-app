import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandWhatsapp,
    IconBrandYoutube,
} from '@tabler/icons-react'
import Logo from './Logo'
import style from './page.module.sass'

export default function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.footerContainer}>
                <div className={style.info}>
                    <Logo />
                    <div className="flex flex-col gap-2 items-center md:items-start">
                        <span className="text-2xl text-zinc-300 font-bold mb-2.5">Contato</span>
                        <span className="text-sm text-zinc-400">barbeariadodg@gmail.com</span>
                        <div className="flex items-center gap-2 text-sm text-zinc-400">
                            <IconBrandWhatsapp size={20} className="text-green-500" />
                            <span>Whatsapp</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                    <div className="flex gap-2 text-zinc-400">
                        <IconBrandYoutube size={28} stroke={1} />
                        <IconBrandInstagram size={28} stroke={1} />
                        <IconBrandFacebook size={28} stroke={1} />
                        <IconBrandLinkedin size={28} stroke={1} />
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-1.5 text-zinc-400 text-sm">
                        <div className="flex gap-1.5">
                            <span>Feito com</span>
                            <span>🪓</span>
                            <span>em {new Date().getFullYear()}</span>
                        </div>
                        <span className="hidden md:inline-block">-</span>
                        <span>Todos os direitos reservados</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
