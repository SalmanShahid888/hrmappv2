import { FC } from "react"
import { Work_Sans } from "next/font/google"
import clsx from "clsx"

import SignInForm from "@/components/SignInForm"

interface pageProps {}
const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
})

const page: FC<pageProps> = ({}) => {
  return (
    <div className="flex justify-between flex-row h-[calc(100vh-theme('spacing.16'))]">
      <div
        className={clsx(
          "flex flex-col text-background items-center justify-center text-center bg-[#0457D2] w-[50vw]",
          workSans.className
        )}
      >
        <h2 className="text-4xl font-normal mb-2 text-white">
          Welcome back to
        </h2>
        <h1 className="text-5xl font-bold italic uppercase text-white">
          Sign in
        </h1>
      </div>

      <div className="flex justify-center items-center p-8 w-[50vw]">
        <div className="px-10 py-12 border-[#0457D2] border rounded-lg w-2/3">
          <SignInForm />
        </div>
      </div>
    </div>
  )
}

export default page
