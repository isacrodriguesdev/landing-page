import Image from "next/image";

export default function SimpleForm() {
  return (
    <>
      <main className="bg-blackLight relative isolate overflow-hidden mt-14">
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
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
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
        <div className="grid mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
          <div className="md:mb-10 lg:mb-0 lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              className="rotate-4"
              src="/image/women.png"
              alt="Mulher"
              width={1076.41}
              height={1196.28}
            />
          </div>
          <div className="sm:mb-10 lg:mb-0 xl:ml-40 mr-auto place-self-center lg:col-span-7">
            <h1 className="text-white max-w-lg mb-4 font-Orbitron tracking-tight leading-none xl:text-5xl md:text-2xl">
              Contrate de forma simples e prática
            </h1>
            <p className="max-w-lg font-sans xl:text-3xl text-gray-400 lg:mb-8 md:text-lg lg:text-xl mt-8 mb-8">
              Inicie hoje mesmo, de forma gratuita, anunciando uma vaga em nossa
              plataforma
            </p>
            <div className="max-w-lg sm:gap-4 flex justify-between">
              <a
                href="#"
                className="inline-flex items-center justify-center px-10 py-5 text-sm font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 bg-white text-secundary hover:text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 transition-all"
              >
                Publicar uma vaga ➔
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-10 py-5 text-sm font-medium text-center rounded-lg bg-gray-700 text-white hover:bg-secundary disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 transition-all"
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
