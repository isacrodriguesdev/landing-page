import Image from "next/image";

export default function Contract() {
  return (
    <>
      <section className="bg-white flex item-center sm:h-fit 3sm:h-fill lg:h-fill justify-center py-10">
        <div className="flex max-w-2xl grid-cols-1 lg:max-w-none xl:grid-cols lg:gap-8 xl:gap-0 2sm:h-fit 3sm:h-fit lg:grid-cols-12">
          <div className="lg:mt-0 lg:flex lg:ml-0 lg:h-fill sm:h-fit md:ml-0 xl:place-items-center">
            <div className="xsm:px-2 md:px-0 lg:ml-10 xl:ml-0 max-w-2xl col-span-7 mr-auto place-self-center">
              <h3 className="2sm:text-2xl xsm:text-xl lg:text-start xsm:text-start text-black font-semibold mb-4 xl:text-5xl 3sm:text-3xl font-Orbitron tracking-tight leading-none md:text-5xl">
                Contrate de forma simples
              </h3>
              <p className="max-w-2xl font-sans 3sm:text-xl xl:text-xl text-gray-400 lg:mb-8 md:text-lg lg:text-xl mt-8 mb-8">
                Inicie hoje gratuitamente a solicitação de um freelancer para
                sua empresa ou projeto
              </p>
              <ul className="max-w-lg space-y-1 text-gray-500 list-inside dark:text-gray-400">
                <li className="flex items-center xl:text-xl font-sans py-2 md:text-xl 3sm:text-lg">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Recrutamento assertivo
                </li>
                <li className="flex items-center xl:text-xl font-sans py-2 md:text-xl 3sm:text-lg">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Redução de turnover
                </li>
                <li className="flex items-center xl:text-xl font-sans py-2 md:text-xl 3sm:text-lg">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Suporte especializado
                </li>
                <li className="flex items-center xl:text-xl font-sans py-2 md:text-xl 3sm:text-lg">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Redução de custo com contratação
                </li>
              </ul>
            </div>
            <div className="w-fit col-span-5 lg:ml-20 flex lg:col-span-5 md:mr-6 xl:mr-0">
              <Image
                className="lg:object-contain xsm:hidden lg:block"
                src="/image/contract.png"
                alt="Mulher"
                width={600}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
