import { useState } from 'react'
import { useVideoAutoplay } from '@/hooks/useVideoAutoplay'
import { Maximize2, X } from 'lucide-react'

interface ProjectVideoProps {
  src: string
  title: string
  className?: string
}

export function ProjectVideo({ src, title, className }: ProjectVideoProps) {
  const videoRef = useVideoAutoplay()
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      <div 
        className={`project-video-wrapper${className ? ` ${className}` : ''}`}
        onClick={() => setIsExpanded(true)}
        style={{ cursor: 'zoom-in' }}
      >
        <video
          ref={videoRef}
          src={src}
          title={title}
          muted
          loop
          playsInline
          preload="metadata"
          className="project-video"
          aria-label={`Vídeo demonstrativo: ${title}`}
        />
        <div className="project-video-play" aria-hidden="true">
          <div style={{ background: 'rgba(0,0,0,0.5)', padding: '12px', borderRadius: '50%', display: 'flex' }}>
            <Maximize2 size={24} color="white" />
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="lightbox" onClick={() => setIsExpanded(false)}>
          <button className="lightbox-close" aria-label="Fechar lightbox">
            <X size={24} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <video 
              src={src} 
              controls 
              autoPlay 
              className="lightbox-video" 
              style={{ maxWidth: '90vw', maxHeight: '85vh', borderRadius: '8px' }}
            />
          </div>
        </div>
      )}
    </>
  )
}
