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
                    <div className={style.contacts}>
                        <span className={style.spanContact}>Contato</span>
                        <span className={style.spanMail}>barbeariadodg@gmail.com</span>
                        <div className={style.zapAlign}>
                            <IconBrandWhatsapp size={20} className={style.whatsapp} />
                            <span>Whatsapp</span>
                        </div>
                    </div>
                </div>
                <div className={style.socialGroup}>
                    <div className={style.social}>
                        <IconBrandYoutube size={28} stroke={1} />
                        <IconBrandInstagram size={28} stroke={1} />
                        <IconBrandFacebook size={28} stroke={1} />
                        <IconBrandLinkedin size={28} stroke={1} />
                    </div>
                    <div className={style.textFooterGroup}>
                        <span>Criado em {new Date().getFullYear()}</span>
                        <span>Todos os direitos reservados</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
