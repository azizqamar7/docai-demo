/**
 * This is the individual file for a webflow page.
 * For Home page js
 * Add or delete these files as per needed.
 */

console.log('Hello from Home folder')

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap'
import { sectionHome } from './section-hero'

window.addEventListener('DOMContentLoaded', (event) => {
  gsap.registerPlugin(ScrollTrigger)

  sectionHome()

  if (window.innerWidth < 991) {
    // sectionTabMobile()
  }
})
