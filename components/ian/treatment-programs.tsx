import { Activity, Droplets, FlaskConical, Sparkles, Thermometer, Waves } from 'lucide-react'

const PROGRAMS = [
  {
    icon: FlaskConical,
    title: '이뮨셀-LC 면역치료',
    desc: '환자 자신의 면역세포를 배양·활성화해 다시 투여하는 항암 면역세포 치료입니다.',
  },
  {
    icon: Thermometer,
    title: '고주파 온열치료',
    desc: '암 조직에 열을 가해 치료 효과를 높이고 면역 반응을 도와 회복을 지원합니다.',
  },
  {
    icon: Waves,
    title: '림프부종 관리',
    desc: '수술·항암 후 나타나는 림프부종을 전문 도수 치료와 압박요법으로 세심하게 관리합니다.',
  },
  {
    icon: Sparkles,
    title: '저출력 레이저 치료',
    desc: '통증 완화와 조직 재생을 돕는 저출력 레이저로 치료 후 불편감을 줄여드립니다.',
  },
  {
    icon: Droplets,
    title: '영양·수액 요법',
    desc: '체력 저하와 영양 불균형을 보완하는 맞춤 수액 및 영양 관리를 진행합니다.',
  },
  {
    icon: Activity,
    title: '한방 협진 치료',
    desc: '한방 치료를 병행해 항암 부작용을 완화하고 전반적인 컨디션 회복을 돕습니다.',
  },
]

export function TreatmentPrograms() {
  return (
    <section id="treatment" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-brand">
            큰 병원 이후의 회복, 한 곳에서 이어갑니다
          </p>
          <h2 className="mt-3 text-balance text-3xl font-black leading-snug text-foreground sm:text-4xl">
            전문적인 <span className="text-brand">통합암치료</span>를 한 곳에서
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-brand text-brand-foreground transition-colors group-hover:bg-accent-orange">
                <p.icon className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
