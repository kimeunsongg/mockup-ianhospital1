import { BookOpen, MessageSquare } from 'lucide-react'

export function NaverBanner() {
  return (
    <section className="bg-brand">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-6 text-center lg:flex-row lg:justify-between lg:px-6 lg:text-left">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full bg-[#03C75A] text-white">
            <span className="text-lg font-black leading-none">N</span>
          </span>
          <p className="text-pretty font-bold text-brand-foreground">
            네이버 톡톡으로 간편하게 상담하고, 블로그에서 병원 소식을 확인하세요!
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          <a
            href="https://talk.naver.com/ct/wtgvxky?frm=mnmb&frm=nmb_detail#nafullscreen"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#03C75A] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            <MessageSquare className="size-4" />
            네이버 톡톡 상담
          </a>
          <a
            href="https://blog.naver.com/prologue/PrologueList.naver?blogId=ian_6000"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
          >
            <BookOpen className="size-4 text-[#03C75A]" />
            네이버 블로그
          </a>
        </div>
      </div>
    </section>
  )
}
