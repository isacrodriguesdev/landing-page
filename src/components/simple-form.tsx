import Image from "next/image";
import { Button } from "./Button";

export default function SimpleForm() {
  return (
    <>
      <section className="bg-gradient-to-tr from-primary to-secundary flex 3sm:justify-center lg:justify-normal justify-between">
        <div className="flex lg:gap-8 xl:gap-0 lg:grid-cols-12 xl:space-x-40">
          <div className="md:mb-10 lg:mb-0 lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              className="rotate-4 xsm:hidden lg:block lg:max-w-lg xl:max-w-2xl"
              src="/image/women.png"
              alt="Mulher"
              width={876.41}
              height={996.28}
            />
          </div>
          <div className="place-self-center py-18 w-fit max-w-xl 2xl:ml-20 ">
            <h3 className="text-white xsm:px-2 sm:px-0 xsm:text-lg xsm:font-bold xsm:text-center mb-4 xsm:pt-10 lg:pt-0 2sm:text-center 3sm:text-xl 3sm:text-center md:text-start tracking-tight leading-none xl:text-6xl md:text-3xl">
              Contrate de forma simples e prática
            </h3>
            <p className="xsm:text-center 2sm:text-center xl:text-2xl text-gray-200 lg:mb-8 md:text-2xl xsm:px-2 3sm:px-0 3sm:text-center md:text-start lg:text-xl my-8">
              Inicie hoje mesmo, de forma gratuita, a solicitação de um
              freelancer para atender suas demandas
            </p>
            <div className="lg:max-w-lg sm:gap-4 md:justify-normal xsm:justify-center xsm:gap-4 flex xsm:pb-10 lg:pb-0">
              <Button Children={undefined} color="white">
                <a className="text-primary" href="#">
                  Solicitar freelancer
                </a>
              </Button>
              <Button Children={undefined} color={undefined}>
                <a href="#">Fale com a gente</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
