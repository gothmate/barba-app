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
                <span className="text-xl sm:text-2xl font-extralight leading-6 tracking-widest text-gradient">
                    Barbearia do DG
                </span>
            </div>
        </Link>
    )
}
