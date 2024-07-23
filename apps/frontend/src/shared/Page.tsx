import Footer from "./Footer"
import style from './page.module.sass'

export interface PageProps {
    children: React.ReactNode
}
export default function Page(props: PageProps) {
    return (
        <div className={style.page}>
            <main>{props.children}</main>
            <Footer />
        </div>
    )
}
