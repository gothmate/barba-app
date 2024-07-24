import Image from 'next/image'
import Link from 'next/link'
import style from './page.module.sass'

export default function Logo() {
    return (
        <Link href="/" className={style.footerImg}>
            <Image 
                src="/logo.png" 
                alt="Logo" 
                width={65} 
                height={65} 
                className={style.img} 
            />
            <div className={style.barberName}>
                <span className={style.text}>
                    Barbearia do DG
                </span>
            </div>
        </Link>
    )
}
