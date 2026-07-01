'use client'

import { useEffect, useState } from 'react'
import { MapPin } from 'lucide-react'

declare global {
  interface Window {
    naver?: {
      maps: {
        Map: new (element: HTMLElement, options: any) => any
        LatLng: new (lat: number, lng: number) => any
        Marker: new (options: any) => any
        Service: {
          geocode: (options: { query: string }, callback: (status: number, response: any) => void) => void
        }
      }
    }
  }
}

const ADDRESS = '전라남도 여수시 해산4길 37'
const DEFAULT_CENTER = { lat: 34.7604, lng: 127.6622 }

export function NaverMapPreview() {
  const [isReady, setIsReady] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const clientId = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID

  useEffect(() => {
    if (!clientId) {
      setError('네이버 지도 API Client ID가 설정되지 않았습니다.')
      return
    }

    if (window.naver?.maps) {
      setIsReady(true)
      return
    }

    const existingScript = document.getElementById('naver-map-script')
    if (existingScript) {
      existingScript.addEventListener('load', () => setIsReady(true), { once: true })
      return
    }

    const script = document.createElement('script')
    script.id = 'naver-map-script'
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${clientId}`
    script.async = true
    script.onload = () => setIsReady(true)
    script.onerror = () => setError('네이버 지도 API를 불러오지 못했습니다.')
    document.head.appendChild(script)
  }, [clientId])

  useEffect(() => {
    if (!isReady || !clientId || typeof window === 'undefined') return

    const mapElement = document.getElementById('naver-map-preview')
    if (!mapElement) return

    const { naver } = window
    if (!naver?.maps) return

    const { maps } = naver

    maps.Service.geocode({ query: ADDRESS }, (status: number, response: any) => {
      const address = response?.v2?.addresses?.[0]
      const lat = address ? Number(address.y) : DEFAULT_CENTER.lat
      const lng = address ? Number(address.x) : DEFAULT_CENTER.lng

      const map = new maps.Map(mapElement, {
        center: new maps.LatLng(lat, lng),
        zoom: 16,
        scaleControl: false,
        mapDataControl: false,
        logoControl: false,
        mapTypeControl: false,
      })

      new maps.Marker({
        position: new maps.LatLng(lat, lng),
        map,
      })
    })
  }, [clientId, isReady])

  return (
    <div className="overflow-hidden rounded-[24px] border border-border bg-background shadow-sm">
      <div className="relative h-[240px] w-full overflow-hidden sm:h-[280px] lg:h-[320px]">
        <div id="naver-map-preview" className="absolute inset-0 h-full w-full" />
        <div className="absolute left-3 top-3 z-10 rounded-full bg-white/95 px-3 py-1.5 text-sm font-semibold text-foreground shadow-sm">
          오시는 길
        </div>
        {!isReady && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-muted/90 px-4 text-center">
            <MapPin className="mb-2 size-6 text-brand" />
            <p className="text-sm font-semibold text-foreground">네이버 지도 API 연결 중입니다.</p>
            {error && <p className="mt-1 text-xs text-muted-foreground">{error}</p>}
          </div>
        )}
      </div>
    </div>
  )
}
