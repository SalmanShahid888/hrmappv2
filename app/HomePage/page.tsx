import { Roboto } from "@next/font/google"

import { cn } from "@/lib/utils"
import Footer from "@/components/Footer"
import Slider from "@/components/Slider"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export default function HomePage() {
  return (
    <>
      <Slider />
      <h1>Homepage!</h1>
      <Footer />
    </>
  )
}
