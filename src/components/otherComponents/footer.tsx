import Image from "next/image";
import { Twitter, Linkedin, Slack } from 'lucide-react'

export default function Footer() {
  return (
    <>
      <footer className="bg-dark w-full py-10 px-4 sm:px-6 lg:px-8">
          <div className="flex md:justify-between items-center xsm:grid xsm:justify-center md:flex" >
            <div className="space-x-4 ">
                <a
                  className="inline-flex text-sm gap-x-2 text-gray-300"
                  href="#"
                >
                  Terms
                </a>
                <a
                  className="inline-flex gap-x-2 text-gray-300"
                  href="#"
                >
                  Privacy
                </a>
                <a
                  className="inline-flex gap-x-2 text-gray-300"
                  href="#"
                >
                  Status
                </a>
              </div>
              <div className="xsm:hidden md:block">
                <a>
                  <Image
                    src="/image/LogoBranco.png"
                    width={151.65}
                    height={32.91}
                    alt="Logo"
                  />
                </a>
                {/* <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  ©2024 WorkeHub.
                </p> */}
              </div>
            <div className="flex justify-between items-center xsm:justify-center">
              <div className="space-x-4">
                <a
                  className="inline-block text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  href="#"
                >
                <Twitter />
                </a>
                <a
                  className="inline-block text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  href="#"
                >
               <Linkedin />
                </a>
                <a
                  className="inline-block text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  href="#"
                >
                  <Slack/>
                </a>
              </div>
            </div>
          </div>
      </footer>
    </>
  );
}
