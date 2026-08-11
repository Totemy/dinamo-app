// v-reveal — fades an element up the first time it scrolls into view.
// Usage: v-reveal  |  v-reveal="200"  (delay in ms)

const REVEAL_CLASS = 'reveal'
const VISIBLE_CLASS = 'is-revealed'

const prefersReducedMotion = () =>
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false

let observer = null

const getObserver = () => {
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const { target, isIntersecting } of entries) {
        if (!isIntersecting) continue
        target.classList.add(VISIBLE_CLASS)
        observer.unobserve(target)
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  )
  return observer
}

export default {
  mounted(el, { value }) {
    if (!window.IntersectionObserver || prefersReducedMotion()) return

    el.classList.add(REVEAL_CLASS)
    if (value) el.style.setProperty('--reveal-delay', `${value}ms`)
    getObserver().observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  }
}
