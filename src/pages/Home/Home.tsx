import { useEffect } from 'react'
import { Hero } from '@/components/home/Hero'
import { FeaturedProjects } from '@/components/home/FeaturedProjects'
import { OtherProjects } from '@/components/home/OtherProjects'
import { Process } from '@/components/home/Process'
import { About } from '@/components/home/About'
import { Experience } from '@/components/home/Experience'
import { Technologies } from '@/components/home/Technologies'
import { Contact } from '@/components/home/Contact'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export function Home() {
  useScrollAnimation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Hero />
      <FeaturedProjects />
      <OtherProjects />
      <Process />
      <About />
      <Experience />
      <Technologies />
      <Contact />
    </>
  )
}
