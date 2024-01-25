import { debounce } from "lodash"
import React, { useEffect, useRef, useState } from "react"

const BackToTopButton = React.lazy(
  async () => import("../components/BackToTopButton")
)
const AboutUs = React.lazy(async () => import("../sections/AboutUs"))
const Contact = React.lazy(async () => import("../sections/Contact"))
const Footer = React.lazy(async () => import("../sections/Footer"))
const Header = React.lazy(async () => import("../sections/Header"))
const Home = React.lazy(async () => import("../sections/Home"))
const Services = React.lazy(async () => import("../sections/Services"))
const Work = React.lazy(async () => import("../sections/Work"))

const Homepage: React.FC = () => {
  const [shouldBeSticky, setShouldBeSticky] = useState<boolean>(false)
  const windowReference = useRef<Window>(window)

  useEffect(() => {
    const windowVariable = windowReference.current
    const handleScroll = debounce((): void => {
      const homeComponent = document.querySelector("#services") as HTMLElement
      if (homeComponent) {
        const homeComponentTop = homeComponent.getBoundingClientRect().top
        setShouldBeSticky(homeComponentTop <= 0)
      }
    }, 100)

    windowVariable.addEventListener("scroll", handleScroll)
    return () => {
      windowVariable.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div>
      <Header shouldBeSticky={shouldBeSticky} />
      <Home />
      <Services />
      <Work />
      <AboutUs />
      <Contact />
      <Footer />

      {
        // Here we're rendering the BackToTopButton component.
      }
      <div className={`go-top ${shouldBeSticky ? "fadeIn" : "fadeOut"}`}>
        <BackToTopButton isVisible={shouldBeSticky} />
      </div>
    </div>
  )
}

export default Homepage
