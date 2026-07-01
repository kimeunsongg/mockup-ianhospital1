import { ChevronDown, Phone } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-center">
      <img
        src="/images/hero.png"
        alt="여수의 푸른 숲과 자연 속에 자리한 이안요양병원의 힐링 산책로"
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-dark/85 via-brand-dark/55 to-brand-dark/20" />

      <div className="mx-auto w-full max-w-6xl px-4 pt-24 lg:px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
            <span className="size-2 rounded-full bg-accent-orange" />
            여수 암 전문 요양병원 · 보건복지부 환자안전 인증
          </span>

          <h1 className="mt-6 text-pretty text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            암 환자의 치료와 마음을
            <br />
            <span className="text-accent-orange">먼저 생각하는</span> 병원
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
            통합암치료부터 자연 속 힐링까지, 여수 이안요양병원은
            환자 한 분 한 분의 회복과 삶의 질을 함께 돌봅니다.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#consult"
              className="inline-flex items-center justify-center rounded-full bg-accent-orange px-7 py-3.5 text-base font-bold text-accent-orange-foreground shadow-lg transition-transform hover:-translate-y-0.5"
            >
              입원·치료 상담 신청
            </a>
            <a
              href="tel:061-652-6000"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/95 px-7 py-3.5 text-base font-bold text-brand-dark transition-transform hover:-translate-y-0.5"
            >
              <Phone className="size-5" />
              061-652-6000
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="아래로 스크롤"
        className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 animate-bounce text-white/80 lg:block"
      >
        <ChevronDown className="size-7" />
      </a>
    </section>
  )
}
