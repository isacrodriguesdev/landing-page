import Image from "next/image";
import { Button } from "./Button";

export default function Header() {
  return (
    <>
      <nav className="bg-white border-gray-200">
        <div className="flex items-center justify-around lg:w-9/12 lg:mx-auto 2xl:justify-between xsm:gap-14 sm:gap-0 xl:justify-between lg:justify-between md:justify-around 3sm:justify-around h-24">
          <div className="xsm:hidden md:block">
            <a href="/" className="flex items-center">
              <Image
                src="/image/LogoPreto.png"
                width={182}
                height={52}
                alt="Picture of the author"
                className="lg:justify-between rounded-xl"
              />
            </a>
          </div>
          <div className="xsm:block md:hidden">
            <a href="/" className="flex items-center">
              <Image
                src="/image/iconePreto.png"
                width={52}
                height={52}
                alt="Picture of the author"
                className="lg:justify-between rounded-xl"
              />
            </a>
          </div>
          <div className="md:block md:w-auto justify-center content-center ">
            <Button Children={undefined} color="black">
              <a href="/" className="text-white">
                Solicitar freelancer
              </a>
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}
