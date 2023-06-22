import Image from "next/image"
import { Roboto } from "@next/font/google"
import heroImage from "assets/Images/hero.png"
import clsx from "clsx"

import { Button } from "@/components/ui/button"
import Slider from "@/components/Slider"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export default function IndexPage() {
  return (
    <>
      <div className="bg-heroGradient dark:bg-heroGradientDark">
        <div className="flex flex-row h-[700px] w-full justify-between items-center container px-[6rem] pt-[5rem]">
          <div className="flex flex-col gap-12">
            <h1
              className={clsx(
                "text-6xl text-primary uppercase font-bold",
                roboto.className
              )}
            >
              Choose Your<span className="text-[#2F80ED]"> Courses </span>{" "}
              <br />
              to Success
            </h1>
            <p className="text-base">
              Build skills with courses, certificates, and degrees online <br />{" "}
              from world-class universities and companies.
            </p>
            <Button variant={"default"} size={"lg"} className="float-left w-40">
              Get Started
            </Button>
          </div>
          <div className="block">
            <Image src={heroImage} alt="hero" className="w-[500px]" />
          </div>
        </div>
      </div>
      {/* Spacer Widget */}
      <div className="my-32"></div>
      {/* Spacer Widget */}
      <div className="flex flex-col justify-center items-center p-10 text-center container gap-5">
        <h2
          className={clsx(
            "text-5xl text-primary capitalize font-black leading-none",
            roboto.className
          )}
        >
          We Provide You <br /> The Better Solutions
        </h2>
        <p className="text-xl text-[#26323880] container px-52 dark:text-slate-300">
          <span className="text-4xl">W</span>e have the Better solutions of your
          problems. Website is a digital platform created by a consultant or
          consultancy firm to showcase their skills, expertise, and services to
          potential clients. Consulting websites typically include information
          about the firm&apos;s services, testimonials or case studies from
          satisfied clients, contact information, and a portfolio of work. Some
          consulting websites may also include a blog or resources section to
          share updates, insights, and helpful information related to the
          firm&apos;s area of expertise.
        </p>
      </div>
      {/* Spacer Widget */}
      <div className="my-32"></div>
      <Slider />
      {/* Spacer Widget */}
      <div className=" bg-[#1C1D1E] dark:border-t dark:bg-background">
        <div className="w-full flex flex-row justify-between items-center h-20 container">
          <p className="text-primary-foreground dark:text-white">
            © 2023 All Rights Reserved.
          </p>
          <p className="text-primary-foreground dark:text-white">
            Terms of Service
          </p>
        </div>
      </div>
    </>
  )
}
