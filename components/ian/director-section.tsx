const CAREER = [
  '내과 전문의 (Internal Medicine)',
  '대한종양내과학회 정회원',
  '대한통합암학회 정회원',
  '대한암재활협회 정회원',
  '대한요양병원협회 정회원',
  '前 대학병원 종양내과 진료',
  '前 성가롤로병원 협력 의료진',
  '보건복지부 환자안전 교육 이수',
]

export function DirectorSection() {
  return (
    <section id="director" className="relative overflow-hidden bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-brand">경험 많은 의료진이 만드는 다른 회복</p>
          <h2 className="mt-3 text-balance text-3xl font-black leading-snug text-foreground sm:text-4xl">
            믿고 맡길 수 있는 <span className="text-brand">의료진</span>
          </h2>
        </div>

        <div className="relative mt-14 grid items-center gap-10 lg:grid-cols-2">
          {/* Left: profile text */}
          <div className="order-2 lg:order-1">
            <p className="text-pretty text-lg font-bold text-brand">
              &ldquo;환자의 삶과 마음을 먼저 생각하는
              <br />
              진료를 이어오고 있습니다&rdquo;
            </p>

            <h3 className="mt-5 text-3xl font-black text-foreground sm:text-4xl">
              홍길동 <span className="text-2xl sm:text-3xl">원장</span>
            </h3>
            <p className="mt-2 text-base font-bold text-foreground">내과 전문의 · 통합암치료</p>

            <ul className="mt-7 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
              {CAREER.map((c) => (
                <li key={c} className="text-sm leading-relaxed text-muted-foreground">
                  - {c}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex gap-4">
              <img
                src="/images/director-sub1.png"
                alt="환자와 상담하는 이안요양병원 원장"
                className="h-28 w-40 rounded-lg object-cover sm:h-32 sm:w-44"
              />
              <img
                src="/images/director-sub2.png"
                alt="진료 기록을 확인하는 이안요양병원 원장"
                className="h-28 w-40 rounded-lg object-cover sm:h-32 sm:w-44"
              />
            </div>
          </div>

          {/* Right: portrait with watermark shapes */}
          <div className="relative order-1 flex min-h-[420px] items-end justify-center lg:order-2 lg:min-h-[560px]">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-2 top-4 select-none text-[9rem] font-black leading-none text-brand/10 sm:text-[13rem]"
            >
              IAN
            </span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-24 hidden h-40 w-24 rounded-md bg-brand-soft lg:block"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-6 top-40 hidden h-28 w-16 rounded-md bg-brand-soft lg:block"
            />
            <img
              src="/images/director.png"
              alt="이안요양병원 대표원장 홍길동"
              className="relative z-10 h-[440px] w-auto max-w-full object-contain lg:h-[580px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
