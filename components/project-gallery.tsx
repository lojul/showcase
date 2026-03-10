'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'motion/react'
import Image from 'next/image'
import { XIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import type { RefObject } from 'react'
import useClickOutside from '@/hooks/useClickOutside'
import type { Project } from '@/app/data'

type ProjectGalleryProps = {
  project: Project | null
  onClose: () => void
}

function getFallbackImages(project: Project | null): string[] {
  if (!project) return []
  return project.images && project.images.length > 0 ? project.images : [project.image]
}

function getFeaturedFolderFromImage(image: string): string | null {
  // "/featured/<folder>/<file>"
  const match = image.match(/^\/featured\/([^/]+)\//)
  return match?.[1] ?? null
}

export function ProjectGallery({ project, onClose }: ProjectGalleryProps) {
  const [images, setImages] = useState<string[]>(() => getFallbackImages(project))
  const [index, setIndex] = useState(0)
  const [loading, setLoading] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const goPrev = useCallback(() => {
    setIndex((i) => (i <= 0 ? images.length - 1 : i - 1))
  }, [images.length])

  const goNext = useCallback(() => {
    setIndex((i) => (i >= images.length - 1 ? 0 : i + 1))
  }, [images.length])

  useEffect(() => {
    if (!project) return
    setIndex(0)
  }, [project])

  useEffect(() => {
    let cancelled = false
    async function load() {
      if (!project) return

      const folder = getFeaturedFolderFromImage(project.image)
      // If it's still the placeholder (no subfolder), just use whatever the data has.
      if (!folder) {
        setImages(getFallbackImages(project))
        return
      }

      setLoading(true)
      try {
        const res = await fetch(`/api/gallery?folder=${encodeURIComponent(folder)}`)
        const json = (await res.json()) as { images?: string[] }
        const nextImages =
          Array.isArray(json.images) && json.images.length > 0
            ? json.images
            : getFallbackImages(project)
        if (!cancelled) setImages(nextImages)
      } catch {
        if (!cancelled) setImages(getFallbackImages(project))
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    void load()
    return () => {
      cancelled = true
    }
  }, [project])

  useEffect(() => {
    setIndex((i) => Math.min(i, Math.max(0, images.length - 1)))
  }, [images.length])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!project) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [project, onClose, goPrev, goNext])

  useEffect(() => {
    if (project) document.body.classList.add('overflow-hidden')
    return () => document.body.classList.remove('overflow-hidden')
  }, [project])

  useClickOutside(containerRef as RefObject<HTMLElement>, () => {
    if (project) onClose()
  })

  if (!project) return null
  if (!images || images.length === 0) return null

  const safeIndex = Math.min(index, images.length - 1)
  const currentSrc = images[safeIndex]

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div
          ref={containerRef}
          className="relative flex max-h-[90vh] w-full max-w-5xl flex-col items-center gap-4 px-4 py-6"
        >
          <div className="flex w-full items-center justify-between gap-3">
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-medium text-white sm:text-lg">
                {project.name}
              </h3>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-white/90">
                <span className="text-[11px] uppercase tracking-wide text-white/60">
                  Image
                </span>
                {safeIndex + 1} / {images.length}
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center rounded-full px-3 py-2.5 text-white/90 transition hover:bg-white/10 hover:text-white"
              aria-label="Close gallery"
            >
              <XIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="ml-1 text-xs sm:hidden">Close</span>
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center gap-2 overflow-hidden">
            {images.length > 1 && (
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-0 z-10 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
                aria-label="Previous image"
              >
                <ChevronLeftIcon className="h-8 w-8" />
              </button>
            )}

            <motion.div
              key={currentSrc}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="relative max-h-[70vh] w-full overflow-hidden rounded-xl bg-zinc-900"
            >
              {loading && images.length <= 1 ? (
                <div className="flex h-[60vh] w-full items-center justify-center text-sm text-white/70">
                  Loading…
                </div>
              ) : (
                <Image
                  src={currentSrc}
                  alt={`${project.imageAlt} — image ${index + 1}`}
                  width={1200}
                  height={675}
                  className="h-auto max-h-[70vh] w-full object-contain"
                  unoptimized={currentSrc.endsWith('.svg')}
                />
              )}
            </motion.div>

            {images.length > 1 && (
              <button
                type="button"
                onClick={goNext}
                className="absolute right-0 z-10 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
                aria-label="Next image"
              >
                <ChevronRightIcon className="h-8 w-8" />
              </button>
            )}
          </div>

          {images.length > 1 && (
            <div className="flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body,
  )
}
