'use client'

import { useState } from 'react'
import { CheckCircle2, ClipboardCheck, FileText, Phone, Stethoscope, UserCheck } from 'lucide-react'

const STEPS = [
  { icon: Phone, title: '상담 문의', desc: '전화 또는 온라인으로 상담을 신청합니다.' },
  { icon: Stethoscope, title: '진료 상담', desc: '환자 상태와 치료 계획을 함께 상담합니다.' },
  { icon: FileText, title: '입원 결정', desc: '병실 안내와 입원 일정을 조율합니다.' },
  { icon: UserCheck, title: '입원·치료', desc: '맞춤 치료와 케어를 시작합니다.' },
]

const CHECKLIST = [
  '신분증 (환자·보호자)',
  '기존 진료 기록 및 소견서',
  '복용 중인 약 및 처방전',
  '개인 세면도구 및 편한 의류',
]

export function AdmissionConsult() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="consult" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-brand">ADMISSION</p>
          <h2 className="mt-3 text-balance text-3xl font-black leading-snug text-foreground sm:text-4xl">
            지금 바로 <span className="text-brand">상담</span>하세요
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            입원 절차는 간단합니다.
            <br />
            궁금하신 점은 언제든 편하게 문의해 주세요.
          </p>
        </div>

        {/* Steps */}
        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-2xl border border-border bg-card p-6 text-center shadow-sm"
            >
              <span className="absolute right-4 top-4 text-sm font-black text-brand/30">
                0{i + 1}
              </span>
              <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-brand text-brand-foreground">
                <s.icon className="size-7" />
              </span>
              <h3 className="mt-4 font-bold text-foreground">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {/* Checklist */}
          <div className="rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border lg:col-span-2">
            <h3 className="flex items-center gap-2 text-lg font-bold text-foreground">
              <ClipboardCheck className="size-5 text-brand" />
              입원 준비물
            </h3>
            <ul className="mt-5 space-y-3">
              {CHECKLIST.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-foreground/80">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand" />
                  <span className="leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
            <a
              href="tel:061-652-6000"
              className="mt-7 flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 font-bold text-brand-foreground transition-opacity hover:opacity-90"
            >
              <Phone className="size-5" />
              061-652-6000 전화 상담
            </a>
          </div>

          {/* Consult form */}
          <div className="rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border lg:col-span-3">
            <h3 className="text-lg font-bold text-foreground">간편 상담 신청</h3>
            {submitted ? (
              <div className="mt-6 flex flex-col items-center justify-center gap-3 rounded-xl bg-brand-soft py-14 text-center">
                <CheckCircle2 className="size-12 text-brand" />
                <p className="text-lg font-bold text-foreground">상담 신청이 접수되었습니다</p>
                <p className="text-sm text-muted-foreground">
                  담당자가 빠른 시일 내에 연락드리겠습니다.
                </p>
              </div>
            ) : (
              <form
                className="mt-6 grid gap-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                      이름
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      placeholder="성함을 입력해 주세요"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
                      연락처
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="010-0000-0000"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                    문의 내용
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="환자 상태나 궁금하신 점을 자유롭게 남겨 주세요."
                    className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                  />
                </div>
                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                  <input type="checkbox" required className="size-4 accent-[#3A7D44]" />
                  개인정보 수집 및 이용에 동의합니다.
                </label>
                <button
                  type="submit"
                  className="mt-1 rounded-full bg-accent-orange px-6 py-3.5 font-bold text-accent-orange-foreground transition-transform hover:-translate-y-0.5"
                >
                  상담 신청하기
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
