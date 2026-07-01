export function Logo({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  const textColor = variant === 'light' ? 'text-white' : 'text-foreground'
  const subColor = variant === 'light' ? 'text-white/70' : 'text-muted-foreground'
  return (
    <div className="flex items-center gap-2.5">
      <img
        src="/images/ian-logo.png"
        alt="이안요양병원 로고"
        className="size-11 shrink-0 rounded-full object-cover"
      />
      <span className="flex flex-col leading-none">
        <span className={`text-lg font-black tracking-tight ${textColor}`}>
          이안<span className="font-medium">요양병원</span>
        </span>
        <span className={`text-[10px] font-medium tracking-[0.2em] ${subColor}`}>
          IAN CANCER CARE HOSPITAL
        </span>
      </span>
    </div>
  )
}
