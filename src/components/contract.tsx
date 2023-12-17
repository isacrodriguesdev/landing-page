import Image from "next/image";

export default function Contract() {
  return (
    <>
      <main className="bg-white h-screen">
        <div className="flex items-center justify-center">
          <div className="col-span-6 xl:place-items-center lg:col-span-12 py-12 lg:resize-x	">
            <h1 className="text-primary max-w-2xl lg:ml-10 mb-4 xl:text-5xl font-Orbitron tracking-tight leading-none md:text-5xl">
              Contrate talentos para sua empresa com a ajuda da IA e dos nossos
              especialistas
            </h1>
            <p className="max-w-2xl lg:ml-10 font-sans xl:text-3xl text-gray-400 lg:mb-8 md:text-lg lg:text-xl mt-8 mb-8">
              Conecte-se com milhares de profissionais de tecnologia e conte com
              o suporte dos nossos profissionais especializados para contratar
              as pessoas adequadas para a sua equipe.
            </p>
            <ul className="max-w-md lg:ml-10 space-y-1 text-gray-500 list-inside dark:text-gray-400">
              <li className="flex items-center font-sans py-2 text-2xl">
                <svg
                  className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Recrutamento Assertivo
              </li>
              <li className="flex items-center font-sans py-2 text-2xl">
                <svg
                  className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Processo ágil
              </li>
              <li className="flex items-center font-sans py-2 text-2xl">
                <svg
                  className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Inteligência Artificial aplicada no R&S</li>
              <li className="flex items-center font-sans py-2 text-2xl">
                <svg
                  className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Redução de custo com contratação</li>
            </ul>
            <div className="mt-8">
            <a
            href="#"
            className="lg:ml-10 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg bg-gradient-to-r from-secundary to-primary focus:ring-4 focus:ring-primary-300 text-white hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 transition-all"
          >
            Publicar uma vaga ➔
          </a>
            </div>
             </div>
            <div className="col-span-5 lg:col-span-5 2xl:mr-40">
              <Image
                className="lg:object-contain"
                src="/image/contract.png"
                alt="Mulher"
                width={600}
                height={300}
              />
            </div>
          </div>
      </main>
    </>
  );
}
