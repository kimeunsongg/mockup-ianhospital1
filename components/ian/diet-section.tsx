const PRINCIPLES = [
  { title: '개인별 맞춤 식단', desc: '치료 단계와 체력, 기저질환을 고려한 환자별 맞춤 영양 설계' },
  { title: '항암 식이요법', desc: '면역력과 회복을 돕는 신선한 제철 식재료 중심의 균형 잡힌 한 끼' },
  { title: '영양팀 관리', desc: '영양사가 직접 관리하는 위생적이고 정성 가득한 이안식단' },
]

export function DietSection() {
  return (
    <section id="diet" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-6">
        <div>
          <p className="text-sm font-semibold text-accent-orange">IAN DIET</p>
          <h2 className="mt-3 text-balance text-3xl font-black leading-snug text-foreground sm:text-4xl">
            암 환자를 위한
            <br />
            <span className="text-accent-orange">세심한 한 끼</span>
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            식사는 곧 치료의 일부입니다.
            <br />
            이안요양병원은 별도의 항암 식이요법을 운영하며,
            환자 한 분 한 분의 상태에 맞춘 영양 관리로
            회복의 기초 체력을 지켜드립니다.
          </p>

          <div className="mt-9 space-y-5">
            {PRINCIPLES.map((p, i) => (
              <div key={p.title} className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent-orange text-base font-black text-accent-orange-foreground">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-foreground">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl">
          <img
            src="/images/diet.png"
            alt="이안요양병원의 항암 맞춤 영양 식단"
            className="h-80 w-full object-cover lg:h-[520px]"
          />
        </div>
      </div>
    </section>
  )
}
