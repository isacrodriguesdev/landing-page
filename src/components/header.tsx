import Image from "next/image";
import { Button } from "./Button";

export default function Header() {
  return (
    <>
      <nav className="bg-white border-gray-200">
        <div className="flex items-center justify-around lg:max-w-7xl lg:mx-auto 2xl:justify-between xsm:gap-14 sm:gap-0 xl:justify-between lg:justify-around md:justify-around 3sm:justify-around h-24">
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
            <a href="" className="">
              <Button 
                type="button"
                className="self-center whitespace-nowrap py-3 px-4 justify-center inline-flex items-center text-md 3sm:text-md font-semibold rounded-lg bg-black text-white" Children={undefined}              >
                Solicitar freelancer
              </Button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
