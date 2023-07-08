import { Roboto, Work_Sans } from "@next/font/google"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "./ui/button"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
})
const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const CardSlider = ({}) => {
  const cardTitles = [
    "HR Management",
    "Legal Consultancy",
    "Law Consultancy",
    "Fashion Designing",
  ]
  return (
    <>
      <div className="flex flex-row gap-4 justify-end">
        {cardTitles.map((title, index) => (
          <Cards id={index.toString()} title={title} />
        ))}
      </div>
      <div className="flex flex-row mt-5 gap-4 container pl-[2.5vw]">
        <ArrowLeft
          className="text-[#A4A5A5] hover:text-[#0E6FFF] transition-colors"
          size="35"
        />
        <ArrowRight
          className="text-[#A4A5A5] hover:text-[#0E6FFF] transition-colors"
          size="35"
        />
      </div>
    </>
  )
}

type CardsProps = {
  title: string
  id?: string
}

const Cards = ({ title, id }: CardsProps) => {
  return (
    //TODO: Add Group Transition
    <Card className="w-[440px] h-[425px] flex flex-col shadow-lg">
      <CardHeader>
        <CardTitle id={id} className={cn("text-4xl", roboto.className)}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="my-3 grow">
        <CardDescription className={cn("text-lg", workSans.className)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quibusdam, quia, quod voluptate voluptas quos
        </CardDescription>
        <Button className="px-0 mt-5" variant={"link"}>
          <span className="flex flex-row gap-1 text-lg items-center font-light">
            Read More
            <ArrowRight />
          </span>
        </Button>
      </CardContent>
      <CardFooter
        className={cn(
          "justify-end text-lg mt-5 flex items-end",
          workSans.className
        )}
      >
        <p className="text-[#1C1D1E66] dark:text-current">Jalal Law Firm</p>
      </CardFooter>
    </Card>
  )
}
