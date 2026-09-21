import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react'
import type { ProjectImage } from '@/types/project'

interface ProjectGalleryProps {
  images: ProjectImage[]
  title: string
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [isZoomed, setIsZoomed] = useState(false)
  const [detectedRatios, setDetectedRatios] = useState<Record<number, 'portrait' | 'landscape' | 'square'>>({})

  function handleImageLoad(index: number, e: React.SyntheticEvent<HTMLImageElement>) {
    const { naturalWidth, naturalHeight } = e.currentTarget
    if (!naturalWidth || !naturalHeight) return

    const ratio = naturalWidth / naturalHeight
    let category: 'portrait' | 'landscape' | 'square' = 'landscape'

    if (ratio < 0.8) {
      category = 'portrait'
    } else if (ratio >= 0.8 && ratio <= 1.2) {
      category = 'square'
    }

    setDetectedRatios((prev) => ({ ...prev, [index]: category }))
  }

  function openLightbox(index: number) {
    setLightboxIndex(index)
    setIsZoomed(false)
  }

  function closeLightbox() {
    setLightboxIndex(null)
    setIsZoomed(false)
  }

  function prev() {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex - 1 + images.length) % images.length)
    setIsZoomed(false)
  }

  function next() {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex + 1) % images.length)
    setIsZoomed(false)
  }

  function toggleZoom() {
    setIsZoomed((prev) => !prev)
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
        {images.map((img, i) => {
          const ratioCategory = img.aspectRatio && img.aspectRatio !== 'auto'
            ? img.aspectRatio
            : detectedRatios[i] || 'landscape'

          const fitClass = img.fit === 'contain' ? ' gallery-thumb--contain' : ''
          const ratioClass = ` gallery-thumb--${ratioCategory}`

          return (
            <button
              key={i}
              className={`gallery-thumb${ratioClass}${fitClass}`}
              onClick={() => openLightbox(i)}
              aria-label={`Ampliar imagem: ${img.alt}`}
              role="listitem"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="gallery-thumb__img"
                loading="lazy"
                onLoad={(e) => handleImageLoad(i, e)}
              />
              {ratioCategory === 'portrait' && (
                <span className="gallery-thumb__badge">Mobile</span>
              )}
            </button>
          )
        })}
      </div>

      {lightboxIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Visualizador de imagem"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox()
          }}
        >
          {/* Top Bar */}
          <div className="lightbox-topbar">
            <span className="lightbox-counter">
              {lightboxIndex + 1} / {images.length}
            </span>

            <div className="lightbox-actions">
              <button
                className="lightbox-btn"
                onClick={toggleZoom}
                aria-label={isZoomed ? 'Restaurar tamanho' : 'Ampliar imagem'}
              >
                {isZoomed ? <ZoomOut size={16} /> : <ZoomIn size={16} />}
                <span>{isZoomed ? 'Restaurar' : 'Zoom'}</span>
              </button>

              <button
                className="lightbox-close-btn"
                onClick={closeLightbox}
                aria-label="Fechar visualizador"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Navigation controls */}
          {images.length > 1 && (
            <>
              <button
                className="lightbox-nav-btn lightbox-prev"
                onClick={prev}
                aria-label="Imagem anterior"
              >
                <ChevronLeft size={26} />
              </button>
              <button
                className="lightbox-nav-btn lightbox-next"
                onClick={next}
                aria-label="Próxima imagem"
              >
                <ChevronRight size={26} />
              </button>
            </>
          )}

          {/* Main content */}
          <div className="lightbox-content">
            <div className="lightbox-img-wrapper" onClick={toggleZoom}>
              <img
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                className={`lightbox-img${isZoomed ? ' lightbox-img--zoom' : ''}`}
              />
            </div>
            {images[lightboxIndex].alt && (
              <p className="lightbox-caption">{images[lightboxIndex].alt}</p>
            )}
          </div>
        </div>
      )}
    </>
  )
}
