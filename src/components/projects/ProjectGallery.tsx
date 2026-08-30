import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { ProjectImage } from '@/types/project'

interface ProjectGalleryProps {
  images: ProjectImage[]
  title: string
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  function openLightbox(index: number) {
    setLightboxIndex(index)
  }

  function closeLightbox() {
    setLightboxIndex(null)
  }

  function prev() {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex - 1 + images.length) % images.length)
  }

  function next() {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex + 1) % images.length)
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
  }

  if (!images.length) return null

  return (
    <>
      <div className="project-gallery" role="list" aria-label={`Galeria de imagens: ${title}`}>
        {images.map((img, i) => (
          <button
            key={i}
            className="gallery-thumb"
            onClick={() => openLightbox(i)}
            aria-label={`Ampliar imagem: ${img.alt}`}
            role="listitem"
          >
            <img src={img.src} alt={img.alt} className="gallery-thumb__img" loading="lazy" />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Visualizador de imagem"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onClick={(e) => { if (e.target === e.currentTarget) closeLightbox() }}
        >
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Fechar">
            <X size={22} />
          </button>
          <button className="lightbox-prev" onClick={prev} aria-label="Imagem anterior">
            <ChevronLeft size={28} />
          </button>
          <div className="lightbox-content">
            <img
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              className="lightbox-img"
            />
            <p className="lightbox-caption">{images[lightboxIndex].alt}</p>
          </div>
          <button className="lightbox-next" onClick={next} aria-label="Próxima imagem">
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </>
  )
}
