import { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import { SmoothCursor } from "@/components/lightswind/smooth-cursor"
import Header from './landing/components/header'
import Articles from './landing/sections/articles'
import Experiences from './landing/sections/experiencs'
import FunFacts from './landing/sections/funfacts'
import Hero from './landing/sections/hero'
import Projects from './landing/sections/projects'
import Skills from './landing/sections/skills'
/* import Header from './landing/components/header' */
import './App.css'

function App() {
  const slideStackRef = useRef<HTMLElement>(null)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: false,
      anchors: true,
      smoothWheel: true,
    })
    const updateActiveSection = ({ scroll }: { scroll: number }) => {
      const sectionIndex = Math.min(
        5,
        Math.floor((scroll + window.innerHeight * 0.05) / window.innerHeight),
      )
      const sectionIds = ['hero', 'skills', 'projects', 'articles', 'fun-facts', 'experience']
      setActiveSection(sectionIds[sectionIndex])
    }

    lenis.on('scroll', updateActiveSection)
    updateActiveSection({ scroll: window.scrollY })
    let animationFrame = 0

    const raf = (time: number) => {
      lenis.raf(time)
      animationFrame = requestAnimationFrame(raf)
    }

    animationFrame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(animationFrame)
      lenis.off('scroll', updateActiveSection)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    const stack = slideStackRef.current
    if (!stack) return

    const slides = Array.from(stack.querySelectorAll<HTMLElement>('[data-slide]'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-active', entry.isIntersecting)
        })
      },
      { threshold: 0.95 },
    )

    slides.forEach((slide) => observer.observe(slide))
    return () => observer.disconnect()
  }, [])

  return (
    <main ref={slideStackRef} className="slide-stack">
      <SmoothCursor
        rotateOnMove={true}
        scaleOnClick={true}
        glowEffect={true}
      />
      <Header activeSection={activeSection} />
      <section className="slide" data-slide id="hero"><Hero /></section>
      <section className="slide" data-slide id="skills"><Skills /></section>
      <section className="slide" data-slide id="projects"><Projects /></section>
      <section className="slide" data-slide id="articles"><Articles /></section>
      <section className="slide" data-slide id="fun-facts"><FunFacts /></section>
      <section className="slide" data-slide id="experience"><Experiences /></section>
    </main>
  )
}

export default App
