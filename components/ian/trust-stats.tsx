const STATS = [
  { top: '보건복지부', value: '환자안전', bottom: '인증 획득' },
  { top: '전체', value: '62', unit: '병상', bottom: '고급병상 37개 운영' },
  { top: '성가롤로병원', value: '협력', bottom: '2025 협약 체결' },
  { top: '여수', value: '자연 속', bottom: '힐링 요양 환경' },
]

export function TrustStats() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-dark py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-accent-orange">TRUST</p>
          <h2 className="mt-3 text-balance text-3xl font-black leading-snug text-white sm:text-4xl">
            신뢰를 쌓아
            <br className="sm:hidden" /> 회복의 결과를 만듭니다
          </h2>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.top} className="text-center">
              <dt className="text-sm font-medium text-white/60">{s.top}</dt>
              <dd className="mt-2 text-3xl font-black text-white sm:text-4xl">
                {s.value}
                {s.unit && (
                  <span className="ml-1 text-lg font-bold text-accent-orange">{s.unit}</span>
                )}
              </dd>
              <dd className="mt-2 text-sm text-white/70">{s.bottom}</dd>
              <div className="mx-auto mt-4 h-0.5 w-10 rounded-full bg-accent-orange/70" />
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
