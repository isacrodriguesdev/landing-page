import Image from "next/image";
import { Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="bg-dark w-full py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex md:justify-between items-center xsm:grid xsm:justify-center md:flex">
          <div className="space-x-4 ">
            <a className="inline-flex text-sm gap-x-2 text-gray-300" href="#">
              Termos
            </a>
            <a className="inline-flex gap-x-2 text-gray-300" href="#">
              Privacidade
            </a>
            {/* <a className="inline-flex gap-x-2 text-gray-300" href="#">
              Status
            </a> */}
          </div>
          <div className="xsm:hidden md:block">
            <a>
              <Image src="/image/LogoBranco.png" width={151.65} height={32.91} alt="Logo" />
            </a>
          </div>
          <div className="flex justify-between items-center xsm:justify-center">
            <div className="space-x-6">
              <a className="inline-block text-gray-500 hover:text-gray-800 dark:hover:text-gray-200" href="https://twitter.com/workehub">
                <Twitter />
              </a>
              <a className="inline-block text-gray-500 hover:text-gray-800 dark:hover:text-gray-200" href="https://www.linkedin.com/company/workehub/">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
