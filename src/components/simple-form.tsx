import Image from "next/image";

export default function SimpleForm() {
  return (
    <>
      <main className="bg-blackLight relative isolate overflow-hidden mt-14 h-fit">
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-primary to-secundary opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute p-10 -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-primary to-secundary opacity-40"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="flex h-1/5 lg:gap-8 xl:gap-0 lg:grid-cols-12">
          <div className="h-min md:mb-10 lg:mb-0 lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              className="rotate-4 xsm:hidden lg:block"
              src="/image/women.png"
              alt="Mulher"
              width={1076.41}
              height={1196.28}
            />
          </div>
          <div className="lg:mb-0 place-self-center py-18 w-fit">
            <h1 className="text-white xsm:text-center mb-4 xsm:pt-10 lg:pt-0 2sm:text-center 3sm:text-xl 3sm:text-center md:text-start font-Orbitron tracking-tight leading-none xl:text-5xl md:text-3xl">
              Contrate de forma simples e prática
            </h1>
            <p className="xsm:text-center font-sans 2sm:text-center xl:text-2xl text-gray-400 lg:mb-8 md:text-lg 3sm:text-center md:text-start lg:text-xl my-8">
              Inicie hoje mesmo, de forma gratuita, anunciando uma vaga em nossa
              plataforma
            </p>
            <div className="max-w-lg sm:gap-4 flex xsm:pb-10 lg:pb-0">
              <a
                href="#"
                className="inline-flex items-center xsm:px-0 2sm:px-1 justify-center px-10 3sm:px-3 py-5 text-sm font-medium text-center rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 bg-white text-secundary hover:text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 transition-all"
              >
                Publicar uma vaga ➔
              </a>
              <a
                href="#"
                className="inline-flex items-center xsm:px-0 2sm:px-1 justify-center px-10 3sm:px-3 py-5 text-sm font-medium text-center rounded-lg bg-gray-700 text-white hover:bg-secundary disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 transition-all"
              >
                Fale com a gente
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
