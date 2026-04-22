import { useEffect } from "react"

export default function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible")
            observer.unobserve(entry.target) 
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight) {
        el.classList.add("reveal-visible")
      } else {
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [])
}