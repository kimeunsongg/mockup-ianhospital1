import { Clock, MapPin, Phone } from 'lucide-react'
import { Logo } from './logo'

const HOURS = [
  { day: '평일', time: 'AM 08:30 - PM 05:30' },
  { day: '토·일·공휴일', time: 'AM 09:00 - PM 12:00', highlight: true },
]

export function LocationFooter() {
  return (
    <>
      <section id="location" className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="space-y-3 rounded-[24px] border border-border bg-background p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-2 text-brand">
              <MapPin className="size-5" />
              <p className="text-sm font-semibold">오시는 길</p>
            </div>
            <div className="space-y-2">
              <p className="text-lg font-bold text-foreground">전라남도 여수시 해산4길 37</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                네이버 지도에서 위치와 길찾기를 바로 확인할 수 있습니다.
              </p>
            </div>
            <a
              href="https://map.naver.com/p/search/%EC%9D%B4%EC%95%88%EC%9A%94%EC%96%91%EB%B3%91%EC%9B%90/place/1591410871?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=%2Fhome%3Ffrom%3Dmap%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202607011415%26locale%3Dko%26svcName%3Dmap_pcv5%26searchText%3D%EC%9D%B4%EC%95%88%EC%9A%94%EC%96%91%EB%B3%91%EC%9B%90"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#03C75A] px-6 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
            >
              <span className="text-base font-black leading-none">N</span>
              네이버 지도로 길찾기
            </a>
          </div>
        </div>
      </section>
      <footer className="bg-brand-dark py-12 text-white/70">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="flex flex-col gap-6 border-b border-white/10 pb-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="[&_span]:text-white">
              <Logo variant="light" />
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
              <a
                href="tel:061-652-6000"
                className="inline-flex items-center gap-2 text-lg font-bold text-white"
              >
                <Phone className="size-5" />
                061-652-6000
              </a>
              <a
                href="https://talk.naver.com/ct/wtgvxky?frm=mnmb&frm=nmb_detail#nafullscreen"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#03C75A] px-3.5 py-1.5 text-xs font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                <span className="font-black leading-none">N</span>
                네이버 톡톡
              </a>
            </div>
          </div>

          <div className="mt-8 space-y-1.5 text-sm">
            <p>이안요양병원 · 여수 암 전문 요양병원</p>
            <p>전라남도 여수시 해산4길 37 (해산동)</p>
            <p>대표번호 061-652-6000 · 전체 62병상 (고급병상 37개)</p>
            <p>보건복지부 환자안전 인증 병원 · 협력병원 성가롤로병원</p>
            <p className="pt-4 text-white/40">
              © 2026 IAN CANCER CARE HOSPITAL. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
