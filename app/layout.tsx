import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ziyodullo Aliyev',
  description: 'Ziyodullo Aliyev, Backend, Django, Developer, Programmer, Founder of TafSoft.uz',
  generator: 'TafSoft.uz',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
