import { HeartPulse, Leaf, ShieldCheck } from 'lucide-react'

const FEATURES = [
  {
    icon: ShieldCheck,
    title: '안전을 더하고',
    desc: '보건복지부 환자안전 인증을 획득한 병원으로, 검증된 시스템 안에서 안심하고 치료받으실 수 있습니다.',
  },
  {
    icon: HeartPulse,
    title: '치료를 잇고',
    desc: '순천 성가롤로병원과의 협력 네트워크로 급성기 치료 이후 회복까지 끊김 없이 이어갑니다.',
  },
  {
    icon: Leaf,
    title: '마음을 돌보고',
    desc: '여수의 산과 바다를 품은 자연환경 속에서 몸의 치료를 넘어 마음의 회복까지 함께합니다.',
  },
]

export function About() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-brand">WHY IAN</p>
          <h2 className="mt-3 text-balance text-3xl font-black leading-snug text-foreground sm:text-4xl">
            치료를 경험하는 모든 순간을
            <br />
            <span className="text-brand">편안하고 특별하게</span>
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            이안요양병원은 단순한 요양이 아닌, 암 환자에게 꼭 필요한 전문 치료와
            따뜻한 돌봄을 한 곳에서 제공합니다.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-md"
            >
              <span className="flex size-14 items-center justify-center rounded-2xl bg-brand text-brand-foreground">
                <f.icon className="size-7" />
              </span>
              <h3 className="mt-6 text-xl font-bold text-foreground">{f.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
