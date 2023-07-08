import { Roboto } from "@next/font/google"

import { cn } from "@/lib/utils"
import Footer from "@/components/Footer"
import Slider from "@/components/Slider"
import { CardSlider } from "@/components/card-slider"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export default function HomePage() {
  return (
    <>
      <Slider />
      {/* Spacer Widget */}
      <div className="my-32" />
      <div className="flex flex-col justify-center items-center p-10 text-center container gap-5">
        <h2
          className={cn(
            "text-5xl text-primary capitalize font-black leading-none",
            roboto.className
          )}
        >
          The Services That we <br /> Provide you
        </h2>
      </div>
      <CardSlider />
      {/* Spacer Widget */}
      <div className="my-32" />
      {/* Spacer Widget */}
      <Footer />
    </>
  )
}
