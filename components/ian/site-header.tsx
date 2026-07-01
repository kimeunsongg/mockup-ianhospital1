'use client'

import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { Logo } from './logo'

const NAV = [
  { label: '병원소개', href: '#about' },
  { label: '통합암치료', href: '#treatment' },
  { label: '힐링프로그램', href: '#healing' },
  { label: '이안식단', href: '#diet' },
  { label: '의료진', href: '#director' },
  { label: '입원상담', href: '#consult' },
  { label: '오시는 길', href: '#location' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'bg-background/95 shadow-sm backdrop-blur' : 'bg-background/70 backdrop-blur'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 lg:px-6">
        <a href="#top" aria-label="이안요양병원 홈">
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="주요 메뉴">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-brand"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:061-652-6000"
            className="hidden items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-bold text-brand-foreground transition-opacity hover:opacity-90 sm:flex"
          >
            <Phone className="size-4" />
            061-652-6000
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={open}
            className="flex size-10 items-center justify-center rounded-md text-foreground lg:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-border bg-background lg:hidden"
          aria-label="모바일 메뉴"
        >
          <ul className="mx-auto max-w-6xl px-4 py-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3 text-sm font-medium text-foreground/80"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="tel:061-652-6000"
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-brand px-4 py-3 text-sm font-bold text-brand-foreground"
              >
                <Phone className="size-4" />
                061-652-6000 전화상담
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
