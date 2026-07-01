import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Noto_Sans_KR } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const notoSansKr = Noto_Sans_KR({
  variable: '--font-noto-kr',
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
})

export const metadata: Metadata = {
  title: '이안요양병원 | 여수 암 전문 요양병원 — 통합암치료·힐링프로그램',
  description:
    '여수 암 전문 요양병원 이안요양병원. 통합암치료, 이뮨셀-LC, 림프부종 관리, 이안식단, 자연 힐링프로그램으로 암 환자의 치료와 마음을 먼저 생각합니다. 061-652-6000',
  keywords: [
    '여수 암요양병원',
    '암 전문 요양병원',
    '통합암치료 요양병원',
    '암환자 힐링 요양',
    '이뮨셀 요양병원',
    '항암 후 요양병원',
    '여수 요양병원',
    '이안요양병원',
  ],
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#3A7D44',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSansKr.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
