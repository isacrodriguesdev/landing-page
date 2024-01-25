export default function Card() {
  return (
    <section className="bg-black flex justify-center items-center xsm:pt-40 2sm:pt-0">
      <div className="sm:grid lg:flex relative isolate w-screen overflow-hidden pt-10 bg-black rounded-xl lg:w-9/12 mx-auto px-10 lg:px-8">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 justify-center place-self-center">
          <div className="mx-auto max-w-4xl lg:mx-0">
            <h3 className="text-2xl tracking-tight font-semibold sm:text-center 3sm:text-center md:text-start lg:text-start text-white sm:text-6xl">
              Fácil e rápido
            </h3>
            <p className="mt-6 text-lg leading-8 text-gray-300 font-sans">
              Acesse a plataforma e envie sua demanda. Em pouco tempo você
              receberá propostas de profissionais qualificados para o seu
              projeto.
            </p>
          </div>
        </div>

        <div className="px-4 sm:px-6 lg:px-8 mx-auto pt-14">
          <ol className="relative text-gray-700 border-s border-gray-200 dark:border-gray-700 text-start">
            <li className="mb-14 ms-8">
              <span className="absolute text-secundary font-bold text-md flex items-center justify-center w-12 h-12 rounded-full -start-6 bg-gray-900">
                1
              </span>
              <p className="text-md text-gray-300 place-self-center">
                Acesse a plataforma e cadastre-se
              </p>
            </li>

            <li className="mb-14 ms-8">
              <span className="absolute text-secundary font-bold text-md flex items-center justify-center w-12 h-12 rounded-full -start-6 bg-gray-900">
                2
              </span>
              <p className="text-md text-gray-300 max-w-xl">
                Envie sua demanda e receba propostas
              </p>
            </li>

            <li className="mb-14 ms-8">
              <span className="absolute text-secundary font-bold text-md flex items-center justify-center w-12 h-12 rounded-full -start-6 bg-gray-900">
                3
              </span>
              <p className="text-md text-gray-300 max-w-xl">
                Analise e escolha a melhor proposta
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
