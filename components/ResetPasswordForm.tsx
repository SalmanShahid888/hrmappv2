"use client"

import Link from "next/link"
import { Montserrat, Work_Sans } from "@next/font/google"
import clsx from "clsx"

import { Button } from "./ui/button"
import { Input } from "./ui/input"

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
})
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
})

const ResetPassword = ({}) => {
  return (
    <div className="flex flex-col gap-2 my-[10vh]">
      <p className="text-sm text-center font-thin text-[#1C1D1E4D] dark:text-slate-200 px-5 mb-2 dark:font-normal">
        Enter Your E-mail Address we sent a one time security code to your email
        please check your E-mail account
      </p>
      <Input
        type="email"
        placeholder="Email"
        className={clsx("text-base", workSans.className)}
      />
      <Button variant="default" size="xl" className="uppercase">
        Send OTP
      </Button>
      <p
        className={clsx(
          "text-[#1C1D1E4D] dark:text-foreground",
          montserrat.className
        )}
      >
        Go Back to{" "}
        <span>
          <Link
            href={"/signIn"}
            className="text-[#0457D2] underline hover:text-[#0457D2]/90 hover:no-underline"
          >
            Login
          </Link>
        </span>
      </p>
    </div>
  )
}

export default ResetPassword
