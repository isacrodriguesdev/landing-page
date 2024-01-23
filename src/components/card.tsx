export default function Card() {
  return (
    <>
      <section className="bg-black flex justify-center items-center xsm:pt-40 2sm:pt-0">
        <div className="sm:grid lg:flex relative isolate overflow-hidden pt-10 bg-black rounded-xl mx-auto xl:max-w-7xl lg:max-w-5xl px-10 lg:px-8">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 justify-center place-self-center">
            <div className="mx-auto max-w-4xl lg:mx-0">
              <h3 className="text-4xl tracking-tight font-semibold sm:text-center 3sm:text-center md:text-start lg:text-start text-white sm:text-6xl">
                Por que escolher a WorkeHub?
              </h3>
              <p className="mt-6 text-lg leading-8 text-gray-300 font-sans">
                Sabemos o quão difícil é recrutar e selecionar profissionais da
                tecnologia. E mais desafiador é manter estes profissionais
                motivados em sua empresa. Com isso, unimos Inteligência
                Artificial e talento para ajudar empresas a encontrarem os
                profissionais certos para as suas oportunidades.
              </p>
            </div>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 mx-auto pt-14">
            <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700">
              <li className="mb-16 ms-8 ">
                <span className="absolute text-secundary flex items-center justify-center w-10 h-10 rounded-full -start-5 bg-gray-900">
                  1
                </span>
                <p className="text-md text-gray-400">Recrutamento e Seleção realizado por profissionais de RH e tecnologia</p>
              </li>
              <li className="mb-16 ms-8">
                <span className="absolute text-secundary flex items-center justify-center w-10 h-10 rounded-full -start-5 bg-gray-900">
                  2
                </span>
                <p className="text-md text-gray-400">Cuidamos de todo o processo de R&S desde a pré-seleção até a negociação   </p>
              </li>
              <li className="mb-16 ms-8">
                <span className="absolute text-secundary flex items-center justify-center w-10 h-10 rounded-full -start-5 bg-gray-900">
                  3
                </span>
                <p className="text-md text-gray-400">Tecnologia aplicada ao processo de R&S com uso da Inteligência Artificial</p>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
