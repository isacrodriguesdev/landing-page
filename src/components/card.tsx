export default function Card() {
  return (
    <>
      <section className="bg-black flex justify-center items-center xsm:pt-40 2sm:pt-0">
        <div className="sm:grid lg:flex relative isolate overflow-hidden pt-20 bg-black rounded-xl mx-auto xl:max-w-7xl lg:max-w-5xl px-10 lg:px-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 justify-center place-self-center">
            <div className="mx-auto max-w-4xl lg:mx-0">
              <h3 className="text-4xl tracking-tight sm:text-center 3sm:text-center md:text-start lg:text-start text-white sm:text-6xl">
                Por que escolher a WorkeHub?
              </h3>
              <p className="mt-6 text-lg leading-8 text-gray-300 font-sans">
                Sabemos o quão difícil é recrutar e selecionar profissionais da
                tecnologia. E mais desafiador é manter estes profissionais
                motivados em sua empresa. Com isso, unimos Inteligência
                Artificial e talento para ajudar empresas a encontrarem os
                profissionais certos para as suas oportunidades.
              </p>
              <a href="" className="">
                <button
                  type="button"
                  className="xsm:hidden lg:block whitespace-nowrap mt-8 py-4 px-4 items-center text-md rounded-lg bg-primary text-white"
                >
                  Experimente Grátis
                </button>
              </a>
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none"></div>
          </div>

          <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
            <div className="sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 h-fit gap-3 sm:gap-6 border-l border-white">
            <div className="group flex flex-col borde mb-8 shadow-md rounded-xl hover:shadow-2xl transition bg-transparent border-zinc-400">
            <h4 className="ml-4 text-white font-bold text-center w-6 rounded-full bg-primary">
                1
              </h4>
                <div className="p-4 md:p-5">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-md text-white font-sans">
                      Recrutamento e Seleção realizado por profissionais de RH
                        e tecnologia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group flex flex-col borde mb-8 shadow-md rounded-xl hover:shadow-2xl transition bg-transparent border-zinc-400">
              <h4 className="ml-4 text-white font-bold text-center w-6 rounded-full bg-primary">
                2
              </h4>
                <div className="p-4 md:p-5">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-md text-white font-sans">
                        Cuidamos de todo o processo de R&S desde a pré-seleção
                        até a negociação
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group flex flex-col borde shadow-md rounded-xl hover:shadow-2xl transition bg-transparent border-zinc-400">
              <h4 className="ml-4 text-white font-bold text-center w-6 rounded-full bg-primary">
                3
              </h4>
                <div className="p-4 md:p-5">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-md text-white font-sans">
                        Tecnologia aplicada ao processo de R&S com uso da
                        Inteligência Artificial
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a href="" className="flex justify-center items-center">
                <button
                  type="button"
                  className="xsm:block lg:hidden bg-primary  mt-8 py-4 px-4 inline-flex items-center text-md rounded-lg"
                >
                  Experimente Grátis
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
