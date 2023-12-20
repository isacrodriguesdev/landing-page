import Image from "next/image";

export default function Banner() {
  return (
<main className="w-full bg-blackLight relative isolate overflow-hidden">
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
      <div className="grid py-8 2sm:px-4 3sm:px-4 md:px-0 lg:gap-8 xl:gap-0 lg:py-20 lg:grid-cols-12">
        <div className="max-w-3xl lg:ml-20 mr-auto place-self-center lg:col-span-7">
          <h1 className="lg:ml-5 xsm:text-center xsm:text-lg xsm:font-bold sm:text-center 2sm:text-2xl 3sm:text-3xl  lg:text-start text-white mb-4 font-Orbitron tracking-tight leading-none lg:text-5xl md:text-4xl">
            Contrate os melhores talentos de tecnologia!
          </h1>
          <p className="lg:ml-5 font-sans sm:text-center lg:text-start xl:text-3xl text-gray-500 lg:mb-8 md:text-xl lg:text-md mt-8 mb-8">
            Encontre os profissionais preparados para os desafios da sua empresa
            ou projeto de forma simples e eficiente!
          </p>
          <div className="sm:gap-4 flex sm:justify-center lg:justify-normal">
          <a
            href="#"
            className="lg:ml-5 3sm:px-1 2sm:px-1 3sm:text-sm inline-flex items-center justify-center 2sm:text-sm py-3 md:px-3 md:text-sm mr-3 text-base font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 bg-white text-secundary hover:text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 transition-all"
          >
            Publicar uma vaga ➔
          </a>
          <a
            href="#"
            className="lg:ml-5 2sm:px-1 2sm:py-1 inline-flex items-center justify-center md:px-3 md:text-sm text-base font-medium text-center rounded-lg bg-gray-700 text-white hover:bg-secundary disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 transition-all"
          >
            Fale com a gente
          </a>
          </div>
          <div className="mt-8 sm:text-center lg:text-start">
            <span className="lg:ml-5 md:text-lg 2sm:text-sm 3sm:text-sm text-white font-sans text-lg">
              Está buscando por uma vaga?
            </span>
            <a className="text-secundary 2sm:text-sm md:text-lg 3sm:text-sm underline" href="/">
              Cadastre-se aqui!
            </a>
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
    </main>
  );
}
