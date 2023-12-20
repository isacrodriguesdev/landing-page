import Image from "next/image";

export default function Freela() {
  return (
    <>
      <main className="bg-white sm:h-fit 3sm:h-screen lg:h-screen flex justify-center">
        <div className="flex items-center mx-auto max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none py-8 xl:grid-cols lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <Image
            className="xsm:hidden lg:block"
            src="/image/moçaWorkeHub.png"
            alt="Mulher"
            width={1000}
            height={300}
          />
          <div className="col-span-5 lg:mt-0 lg:col-span-5 lg:flex md:pt-14 lg:ml-0 h-screen">
            <div className="2sm:ml-4 xsm:ml-4 col-span-7 lg:ml-20 xl:ml-60 mr-auto place-self-center lg:col-span-12 3sm:ml-4 md:ml-0">
              <h1 className="2sm:text-2xl xsm:text-xl text-black mb-4 xl:text-5xl 3sm:text-3xl font-Orbitron tracking-tight leading-none md:text-5xl">
                Está com um projeto e necessita de um freelancer?
              </h1>
              <p className="max-w-2xl font-sans 3sm:text-xl xl:text-3xl text-gray-400 lg:mb-8 md:text-lg lg:text-xl mt-8 mb-8">
                Contrate em poucos minutos um freelancer para um projeto em
                específico para você ou sua empresa.
              </p>
              <ul className="max-w-lg space-y-1 text-gray-500 list-inside dark:text-gray-400">
                <li className="flex items-center font-sans py-2 md:text-2xl 3sm:text-lg">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-black dark:text-black flex-shrink-0"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Receba propostas
                </li>
                <li className="flex items-center font-sans py-2 md:text-2xl 3sm:text-lg">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-black dark:text-black flex-shrink-0"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Escolha um freelancer
                </li>
                <li className="flex items-center font-sans py-2 md:text-2xl 3sm:text-lg">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-black dark:text-black flex-shrink-0"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Negocie com os profissionais
                </li>
                <li className="flex items-center font-sans py-2 md:text-2xl 3sm:text-lg">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-black dark:text-black flex-shrink-0"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Avalie os candidatos e projetos realizados
                </li>
              </ul>
              <div className="mt-8">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg bg-gradient-to-l from-secundary to-terciary focus:ring-4 focus:ring-primary-300 text-white hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 transition-all"
                >
                  Publicar um projeto ➔
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
