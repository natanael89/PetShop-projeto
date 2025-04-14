import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Button from "../ui/Button"
import { ArrowRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
} from "../../components/ui/Carousel"
import { useSiteContext } from "../../context/site-context"

export const HeroSlider = () => {
  const { home } = useSiteContext()
  const [api, setApi] = useState(null)
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [count, setCount] = useState(0)

  // Configurar o número de slides
  useEffect(() => {
    if (!home.hero.slides) return
    setCount(home.hero.slides.length)
  }, [home.hero.slides])

  // Configurar autoplay
  useEffect(() => {
    if (!api || !autoplay) return

    const interval = setInterval(() => {
      api.scrollNext()
    }, 5000) // Muda a cada 5 segundos

    return () => clearInterval(interval)
  }, [api, autoplay])

  // Atualizar o slide atual
  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  // Pausar autoplay quando o mouse estiver sobre o slider
  const handleMouseEnter = () => setAutoplay(false)
  const handleMouseLeave = () => setAutoplay(true)

  // Fallback para quando não há slides configurados
  if (!home.hero.slides || home.hero.slides.length === 0) {
    return (
      <section className="relative h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src={home.hero.image || "/placeholder.svg"}
            alt={home.hero.title}
            className="object-cover brightness-50"
          />
        </div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{home.hero.title}</h1>
          <p className="text-xl md:text-2xl mb-8">{home.hero.subtitle}</p>
          <Link to="/produtos">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              {home.hero.buttonText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="relative h-[500px]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Carousel setApi={setApi} className="h-full">
        <CarouselContent className="h-full">
          {home.hero.slides.map((slide, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative h-full flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                  <img
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    className="object-cover brightness-50 h-full w-full"
                  />
                </div>
                <div className="container relative z-10 text-center text-white flex flex-col items-center justify-center h-full">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
                  <Link to={slide.buttonLink || "/produtos"}>
                    <Button size="lg" className="bg-green-600 hover:bg-green-700">
                      {slide.buttonText}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-6 bg-black/30 hover:bg-black/50 text-white border-none h-10 w-10" />
        <CarouselNext className="right-6 bg-black/30 hover:bg-black/50 text-white border-none h-10 w-10" />

        {/* Indicador numérico usando current e count */}
        <div className="absolute top-4 right-4 z-20 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {current + 1} / {count}
        </div>

        <div className="absolute bottom-6 left-0 right-0 z-20">
          <CarouselDots />
        </div>
      </Carousel>
    </section>
  )
}
