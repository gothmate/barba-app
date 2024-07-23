import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.sass"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Barber-App",
  description: "Criado por Gate7 Enterprise",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
