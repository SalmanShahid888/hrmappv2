"use client"

import { useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

const Dot = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="100"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-dot"
  >
    <circle cx="12.1" cy="12.1" r="1"></circle>
  </svg>
)

const sliderImgs = [
  {
    url: "https://images.pexels.com/photos/68761/pexels-photo-68761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    url: "https://images.pexels.com/photos/326520/pexels-photo-326520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    url: "https://images.pexels.com/photos/265144/pexels-photo-265144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    url: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    url: "https://images.pexels.com/photos/326512/pexels-photo-326512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
]

const Slider = ({}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? sliderImgs.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const nextSlide = () => {
    const isLastSlide = currentIndex === sliderImgs.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }
  const gotoSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="max-w-full h-[780px] m-auto py-16 rounded-none relative group object-contain">
      <div
        style={{ backgroundImage: `url(${sliderImgs[currentIndex].url})` }}
        className="w-full h-full rounded-none bg-center bg-contain duration-500"
      ></div>
      {/* left arrow */}
      <div className="hidden group-hover:block group-hover:transition group-hover:ease-in-out group-hover:duration-500 absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-3xl rounded-full p-2 text-black/70 cursor-pointer ">
        <ChevronLeftIcon onClick={prevSlide} size={50} />
      </div>
      {/* right arrow */}
      <div className="hidden group-hover:block group-hover:transition group-hover:ease-in-out group-hover:duration-500 absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 text-3xl rounded-full p-2 text-black/70 cursor-pointer ">
        <ChevronRightIcon onClick={nextSlide} size={50} />
      </div>
      {/* dots */}
      <div className="flex absolute translate-x-[100%] -translate-y-[90%] justify-center py-2">
        {sliderImgs.map((_, index) => (
          <div
            key={index}
            onClick={() => gotoSlide(index)}
            className="text-[150px] cursor-pointer"
          >
            <Dot
              className={
                currentIndex === index
                  ? "text-muted text-[150px]"
                  : "text-[#0457D2] text-[150px]"
              }
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider
