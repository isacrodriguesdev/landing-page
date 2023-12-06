import Image from "next/image";

export default function Header() {
    return (
      <>
        <nav className="bg-white border-gray-200 h-screen w-screen">
          <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-3 pl-0">
            <a
              href="/"
              className="flex items-center space-x-3"
            >
              <Image
                src="/image/LogoAzul.png"
                width={32}
                height={32}
                alt="Picture of the author"
                className="rounded-xl"
              />
              <span className="self-center font-bold whitespace-nowrap text-3xl text-primary">
                WorkeHub
              </span>
            </a>
            <div
              className="hidden h-20 md:block md:w-auto justify-center content-center mt-5"
              id="navbar-default"
            >
              <a href="" className="">
                <button
                  type="button"
                  className="py-4 px-4 inline-flex items-center gap-x-2 text-lg font-bold rounded-lg border border-transparent bg-secundary text-white disabled:opacity-50 disabled:pointer-events-none"
                >
                  Experimente Grátis
                </button>
              </a>
            </div>
          </div>

         {/* Banner */}

          <main className="bg-blackLight">
      <div className="grid px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="ml-40 mr-auto place-self-center lg:col-span-7">
          <h1 className="text-white max-w-2xl mb-4 xl:text-5xl  font-Orbitron tracking-tight leading-none md:text-5xl">
          Contrate os melhores talentos de tecnologia!
          </h1>
          <p className="max-w-2xl font-sans xl:text-3xl text-gray-500 lg:mb-8 md:text-lg lg:text-xl mt-8 mb-8">
          Encontre os profissionais preparados para os desafios da sua empresa ou projeto de forma simples e eficiente!
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 bg-white text-secundary hover:text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 transition-all"
          >
            Publicar uma vaga ➔
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center rounded-lg bg-gray-700 text-white hover:bg-secundary disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 transition-all"
          >
            Fale com a gente
          </a>
          <div className="mt-8">
            <span className="text-white font-sans text-lg">Está buscando por uma vaga?</span> <a className="text-secundary underline" href="/">Cadastre-se aqui!</a>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex pt-14">
        <Image
              src="/image/MulherWorke.png"
              alt="Mulher"
              width={1440}
              height={1440}
            />
        </div>  
       </div>    
    </main>
        </nav>
      </>
    );
  }
  