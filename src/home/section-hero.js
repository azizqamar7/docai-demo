import gsap from 'gsap'

export const sectionHome = () => {
  const tl = gsap.timeline({
    defaults: { ease: 'power2.out', duration: 1 },
  })

  tl.from('[section_hero] h1', { y: 30 })
    .from('[section_hero] p', { y: 30 }, '<40%')
    .from('[section_hero] .button', { y: 30 }, '<40%')
    .from('[section_hero] .hero-image', { y: 30 }, 0.2)
}
