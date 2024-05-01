import { useEffect } from "react"

export default function useAnimation(ref, anime) {

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        ref.current.classList.add('animate__animated')
        ref.current.classList.add(`animate__${anime.type}`)
        ref.current.classList.add(`animate__${anime.velocity}`)
        ref.current.classList.add(`aniamte__${anime.loop}`)
      } else {
        ref.current.classList.remove('animate__animated')
        ref.current.classList.remove(`animate__${anime.type}`)
        ref.current.classList.remove(`animate__${anime.velocity}`)
        ref.current.classList.remove(`aniamte__${anime.loop}`)
      }
    }, { root: null, rootMargin:'5px'})

    observer.observe(ref.current)

    return () => {
      observer.unobserve(ref.current)
    }
  }, [ref])

}