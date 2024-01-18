import Image from "next/image";

export default function Banner() {
  return (
    <section className="w-full bg-gradient-to-tr from-primary to-secundary relative isolate overflow-hidden 2xl:mt-0 lg:my-0">
      <div className="grid 2sm:px-4 3sm:px-4 md:px-0 lg:gap-8 xl:gap-0 lg:grid-cols-12 justify-center">
        <div className="xl:max-w-3xl  lg:ml-20 mr-auto place-self-center lg:col-span-7 ">
          <h1 className="lg:ml-5 xsm:text-center xsm:text-xl xsm:font-bold md:mt-8 lg:mt-0 sm:text-center 2sm:text-2xl 3sm:text-3xl xl:text-5xl lg:text-start text-white mb-4 font-Orbitron tracking-tight leading-none lg:text-4xl md:text-4xl">
            Encontre os melhores desenvolvedores para seu projeto
          </h1>
          <h2 className="lg:ml-5 font-sans xsm:mb-8 sm:text-center lg:text-start xl:text-2xl text-gray-100 md:text-xl lg:text-dm lg:mt-8 lg:mb-8">
            Conecte-se com desenvolvedores e conte com nosso suporte para contratar os freelancers adequadas para seu projeto ou sua empresa.
          </h2>
          <div className="flex xsm:justify-center lg:justify-normal lg:mb-0 xsm:mb-4 md:mb-8">
            <a
              href="https://wa.me/message/MJDUYQ4X3SL7I1"
              target="_blank"
              className="lg:ml-5 3sm:px-1 2sm:px-1 3sm:text-sm xsm:px-1 xsm:text-sm inline-flex items-center justify-center 2sm:text-sm py-3 md:px-3 md:text-sm text-base font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 bg-white text-secundary hover:text-white hover:bg-black disabled:opacity-50 disabled:pointer-events-none transition-all"
            >
              Fale com a gente
            </a>
          </div>
        </div>
        <div className="hidden lg:col-span-5 lg:flex justify-end">
          <Image className="" src="/image/MulherWorke.png" alt="Mulher" width={750.96} height={605} />
        </div>
      </div>
    </section>
  ); 
}
