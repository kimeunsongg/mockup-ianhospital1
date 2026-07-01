'use client'

import { useEffect, useState } from 'react'
import { ArrowUp, ClipboardList, MessageCircle, Phone } from 'lucide-react'

export function QuickMenu() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      {/* PC floating side quick menu */}
      <div className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 xl:flex">
        <a
          href="tel:061-652-6000"
          className="flex w-20 flex-col items-center gap-1 rounded-xl bg-brand px-2 py-3 text-brand-foreground shadow-lg transition-transform hover:-translate-y-0.5"
        >
          <Phone className="size-5" />
          <span className="text-xs font-semibold">전화상담</span>
        </a>
        <a
          href="https://talk.naver.com/ct/wtgvxky?frm=mnmb&frm=nmb_detail#nafullscreen"
          target="_blank"
          rel="noreferrer"
          className="flex w-20 flex-col items-center gap-1 rounded-xl bg-[#03C75A] px-2 py-3 text-white shadow-lg transition-transform hover:-translate-y-0.5"
        >
          <MessageCircle className="size-5" />
          <span className="text-xs font-semibold">문의하기</span>
        </a>
        <a
          href="#consult"
          className="flex w-20 flex-col items-center gap-1 rounded-xl bg-accent-orange px-2 py-3 text-accent-orange-foreground shadow-lg transition-transform hover:-translate-y-0.5"
        >
          <ClipboardList className="size-5" />
          <span className="text-xs font-semibold">입원안내</span>
        </a>
        <button
          type="button"
          onClick={scrollTop}
          aria-label="맨 위로"
          className={`flex w-20 flex-col items-center gap-1 rounded-xl border border-border bg-background px-2 py-3 text-foreground shadow-lg transition-opacity ${
            visible ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          <ArrowUp className="size-5" />
          <span className="text-xs font-semibold">TOP</span>
        </button>
      </div>

      {/* Mobile bottom fixed bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-border bg-background xl:hidden">
        <a
          href="tel:061-652-6000"
          className="flex flex-col items-center gap-0.5 py-2.5 text-brand"
        >
          <Phone className="size-5" />
          <span className="text-xs font-semibold">전화</span>
        </a>
        <a
          href="https://talk.naver.com/ct/wtgvxky?frm=mnmb&frm=nmb_detail#nafullscreen"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-0.5 border-x border-border py-2.5 text-[#03C75A]"
        >
          <MessageCircle className="size-5 text-[#03C75A]" />
          <span className="text-xs font-semibold">문의하기</span>
        </a>
        <a
          href="#consult"
          className="flex flex-col items-center gap-0.5 py-2.5 text-accent-orange"
        >
          <ClipboardList className="size-5" />
          <span className="text-xs font-semibold">입원문의</span>
        </a>
      </div>
    </>
  )
}
