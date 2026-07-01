'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const IMAGES = [
  { src: '/images/interior-1.png', alt: '이안요양병원 밝고 쾌적한 로비와 접수 공간' },
  { src: '/images/interior-2.png', alt: '자연 채광이 드는 편안한 입원 병실' },
  { src: '/images/interior-3.png', alt: '넓고 밝은 재활치료실' },
]

export function FacilityGallery() {
  const [index, setIndex] = useState(0)
  const go = (dir: number) =>
    setIndex((i) => (i + dir + IMAGES.length) % IMAGES.length)

  return (
    <section id="facility" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-brand">FACILITY</p>
          <h2 className="mt-3 text-balance text-3xl font-black leading-snug text-foreground sm:text-4xl">
            가장 편안해야 할 곳은
            <br className="sm:hidden" /> <span className="text-brand">요양병원</span>입니다
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            우리 집처럼 편안하고 쾌적한 환경에서 치료와 회복에 집중하실 수 있도록
            시설 하나하나에 정성을 담았습니다.
          </p>
        </div>

        <div className="mt-12">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={IMAGES[index].src || '/placeholder.svg'}
              alt={IMAGES[index].alt}
              className="h-72 w-full object-cover sm:h-[460px]"
            />
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="이전 사진"
              className="absolute left-4 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/85 text-foreground shadow-md transition-colors hover:bg-background"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="다음 사진"
              className="absolute right-4 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/85 text-foreground shadow-md transition-colors hover:bg-background"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {IMAGES.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`${i + 1}번 사진 보기`}
                className={`overflow-hidden rounded-xl ring-2 transition-all ${
                  i === index ? 'ring-brand' : 'ring-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img.src || '/placeholder.svg'} alt="" className="h-20 w-full object-cover sm:h-28" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
