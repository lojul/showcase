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

function getImages(project: Project | null): string[] {
  if (!project) return []
  return project.images && project.images.length > 0 ? project.images : [project.image]
}

export function ProjectGallery({ project, onClose }: ProjectGalleryProps) {
  const images = getImages(project)
  const [index, setIndex] = useState(0)
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

  const currentSrc = images[index]

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
          <div className="flex w-full items-center justify-between gap-4">
            <h3 className="text-lg font-medium text-white sm:text-xl">
              {project.name} — {index + 1} / {images.length}
            </h3>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full p-2 text-white/90 transition hover:bg-white/10 hover:text-white"
              aria-label="Close gallery"
            >
              <XIcon className="h-6 w-6" />
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
              <Image
                src={currentSrc}
                alt={`${project.imageAlt} — image ${index + 1}`}
                width={1200}
                height={675}
                className="h-auto max-h-[70vh] w-full object-contain"
                unoptimized={currentSrc.endsWith('.svg')}
              />
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
