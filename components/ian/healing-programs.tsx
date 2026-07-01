import { Check } from 'lucide-react'

const HEALING = [
  '숲길 산책 및 자연 치유 프로그램',
  '명상·이완 프로그램으로 마음 안정',
  '원예치료로 일상의 활력 회복',
  '미술·음악치료 등 정서 케어',
]

export function HealingPrograms() {
  return (
    <section id="healing" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-6">
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src="/images/healing.png"
            alt="이안요양병원 주변의 숲길 힐링 산책 코스"
            className="h-80 w-full object-cover lg:h-[460px]"
          />
          <span className="absolute bottom-4 left-4 rounded-full bg-brand px-4 py-1.5 text-sm font-semibold text-brand-foreground">
            여수의 자연을 품은 힐링 환경
          </span>
        </div>

        <div>
          <p className="text-sm font-semibold text-brand">HEALING PROGRAM</p>
          <h2 className="mt-3 text-balance text-3xl font-black leading-snug text-foreground sm:text-4xl">
            치료 너머,
            <br />
            <span className="text-brand">삶의 질을 회복</span>합니다
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            이안요양병원은 여수의 산과 바다가 어우러진 자연환경 속에서
            몸의 치료뿐 아니라 마음의 회복을 함께 돌봅니다.
            <br />
            환자와 보호자 모두가 편안함을 느낄 수 있는
            다양한 힐링 프로그램을 운영합니다.
          </p>

          <ul className="mt-8 space-y-3">
            {HEALING.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand text-brand-foreground">
                  <Check className="size-4" />
                </span>
                <span className="leading-relaxed text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
