import Image from "next/image";
import React from "react";
import { Button } from "./Button";


export default function Banner() {
  return (
    <div className="w-full bg-gradient-to-tr from-primary to-secundary xsm:py-20 lg:py-0">
      <div className="grid 2sm:px-4 3sm:px-4 md:px-0 lg:gap-8 xl:gap-0 lg:grid-cols-12 justify-center">
        <div className="xl:max-w-3xl xsm:px-4 place-self-center lg:col-span-7 lg:w-9/12 lg:ml-52">
          <h1 className="lg:ml-5 xsm:text-center xsm:text-xl xsm:font-bold md:mt-8 lg:mt-0 sm:text-center 2sm:text-2xl 3sm:text-3xl xl:text-5xl lg:text-start text-white mb-4 font-Orbitron tracking-tight leading-none lg:text-4xl md:text-4xl">
            Eleve seu negócio com os melhores talentos remotos
          </h1>
          <h2 className="lg:ml-5 font-sans xsm:mb-8 sm:text-center xsm:text-center lg:text-start xl:text-2xl text-gray-100 md:text-xl lg:text-dm lg:mt-8 lg:mb-8">
            Amplie sua empresa com agilidade e confiança. Conectamos você a uma
            rede de talentos adaptados às suas necessidades
          </h2>
          <div className="flex xsm:justify-center lg:ml-5 lg:justify-normal lg:mb-0 xsm:mb-4 md:mb-8">
            <Button Children={undefined}>
            <a
              href="https://wa.me/message/MJDUYQ4X3SL7I1"
              target="_blank"
              className=""
            >
              Fale com a gente
            </a>
         </Button>
          </div>
        </div>
        <div className="hidden lg:col-span-5 lg:flex justify-end">
          <Image
            className=""
            src="/image/MulherWorke.png"
            alt="Mulher"
            width={750.96}
            height={605}
          />
        </div>
      </div>
    </div>
  );
}
