import { Roboto } from "@next/font/google"

import { cn } from "@/lib/utils"
import Footer from "@/components/Footer"
import { CardSlider } from "@/components/card-slider"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
})
//TODO: Add a BG-Backdrop
export default function FashionDesign() {
  return (
    <>
      <div className="relative">
        <div
          className="relative w-full bg-cover bg-center h-[948.307px] flex justify-center items-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)`,
          }}
        >
          <div className="flex flex-col justify-center items-center text-center">
            <h1
              className={cn(
                "text-[84px] text-white flex justify-self-center items-center leading-none font-semibold uppercase",
                roboto.className
              )}
            >
              Style is a way to say
            </h1>
            <h1
              className={cn(
                "text-[#FFCB21] uppercase text-[84px] items-center font-semibold"
              )}
            >
              who you are
            </h1>
          </div>
        </div>
        <div
          className="absolute inset-0 bg-black mix-blend-overlay opacity-40"
          aria-hidden="true"
        ></div>
      </div>

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
