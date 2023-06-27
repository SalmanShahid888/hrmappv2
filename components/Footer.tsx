import { FC } from "react"
import Image from "next/image"
import { Sail, Salsa, Work_Sans } from "@next/font/google"

import { cn } from "@/lib/utils"

const salsa = Salsa({
  subsets: ["latin"],
  weight: ["400"],
})
const sail = Sail({
  subsets: ["latin"],
  weight: ["400"],
})
const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
})

interface FooterProps {}

const svgs = {
  facebook: "/facebook.svg",
  instagram: "/instagram.svg",
  whatsapp: "/whatsapp.svg",
  linkedin: "/linked-in.svg",
}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <>
      <footer className="w-full bg-[#1C1D1E] text-white pt-20 px-[120px] flex flex-col gap-5 h-[411px] shrink-0">
        <div className="flex flex-row">
          <div className="flex-col flex-1">
            <h1 className={cn("text-[#FFF] text-[42px]", salsa.className)}>
              Jalal{" "}
              <span className={cn("text-[#FFF], opacity-60", sail.className)}>
                Law{" "}
              </span>
              Firm
            </h1>
            <p className="mt-4 flex flex-col w-[430px] text-white/50 text-lg">
              The best Services that we should provide in this website. Vitae
              nulla nunc euismod vel pretium tellus accumsan semper. Vitae nulla
              nunc euismod vel pretium tellus accumsan semper.
            </p>
          </div>
          <div className="flex flex-row mt-4 gap-16 flex-2">
            <div className="flex flex-col gap-2">
              <h4
                className={cn("text-white/50 text-lg mb-5", workSans.className)}
              >
                Contact Us
              </h4>
              <p>email@gmail.com</p>
              <p>Phone: 909999099</p>
              <div className="flex flex-row">
                <Image
                  src={svgs.facebook}
                  height={24}
                  width={24}
                  alt="Facebook Icon"
                />
                <Image
                  src={svgs.instagram}
                  height={24}
                  width={24}
                  alt="Instagram Icon"
                />
                <Image
                  src={svgs.linkedin}
                  height={24}
                  width={24}
                  alt="LinkedIn Icon"
                />
                <Image
                  src={svgs.whatsapp}
                  height={24}
                  width={24}
                  alt="Whatsapp Icon"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4
                className={cn("text-white/50 text-lg mb-5", workSans.className)}
              >
                Pages
              </h4>
              <p>About</p>
              <p>Price</p>
              <p>Help</p>
              <p>Contact</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4
                className={cn("text-white/50 text-lg mb-5", workSans.className)}
              >
                Demos
              </h4>
              <p className="text-blue-600">Light Theme</p>
              <p>Classic Theme</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4
                className={cn("text-white/50 text-lg mb-5", workSans.className)}
              >
                Resources
              </h4>
              <p>Documentation</p>
            </div>
          </div>
        </div>
      </footer>
      <div className="flex flex-row justify-between items-center border-t px-[120px] border-t-white/50 h-[91px] w-full bg-[#1C1D1E]">
        <p className="text-white/50 text-lg">@2023 All Rights Reserved.</p>
        <p className="text-lg text-white">Terms of Service</p>
      </div>
    </>
  )
}

export default Footer
