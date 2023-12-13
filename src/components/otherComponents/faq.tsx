import Image from "next/image";

export default function faq() {
  return (
    <>
      <main className="bg-white h-screen">
        <div className="flex items-center mx-auto max-w-2xl grid-cols-1 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none py-8 xl:grid-cols lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-justify text-2xl md:text-4xl md:leading-tight text-primary">
                Perguntas Frequentes
              </h2>
            </div>

            <div className="max-w-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <details className="group" open>
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900">
                    O que é a WorkeHub?
                    <div className="text-secondary-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 transition-all duration-300 group-open:rotate-180"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500">
                    A WorkeHub é uma plataforma especializada em conectar
                    profissionais de tecnologia com empresas que buscam suas
                    habilidades específicas. Nossa missão é facilitar a busca
                    por talentos qualificados e oferecer aos desenvolvedores
                    acesso a oportunidades alinhadas com suas competências e
                    interesses. Atuamos como um intermediário confiável,
                    agilizando o processo de contratação no setor de tecnologia,
                    tanto para projetos de curto prazo quanto para posições
                    permanentes, tornando a WorkeHub uma solução eficiente para
                    empresas e profissionais da área. Empregamos avançadas
                    técnicas de Inteligência Artificial para realizar uma
                    triagem eficiente e precisa de candidatos, garantindo a
                    melhor correspondência entre competencias dos candidados e
                    necessidades das vagas.
                  </div>
                </details>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900">
                    Quais os diferenciais da WorkeHub?
                    <div className="text-secondary-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 transition-all duration-300 group-open:rotate-180"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500">
                    This is the second item's accordion body.
                  </div>
                </details>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900">
                    Vocês usam a IA para contratar profissionais?
                    <div className="text-secondary-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 transition-all duration-300 group-open:rotate-180"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500">
                    This is the second item's accordion body.
                  </div>
                </details>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900">
                    Consigo contratar freelancers?
                    <div className="text-secondary-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 transition-all duration-300 group-open:rotate-180"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500">
                    This is the second item's accordion body.
                  </div>
                </details>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900">
                    Qual o prazo para contratar um profissional?
                    <div className="text-secondary-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 transition-all duration-300 group-open:rotate-180"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500">
                    This is the second item's accordion body.
                  </div>
                </details>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900">
                    Quais perfis encontro na WorkeHub?
                    <div className="text-secondary-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 transition-all duration-300 group-open:rotate-180"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500">
                    This is the second item's accordion body.
                  </div>
                </details>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900">
                    É disponibilizado testes para os candidatos?
                    <div className="text-secondary-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 transition-all duration-300 group-open:rotate-180"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500">
                    This is the second item's accordion body.
                  </div>
                </details>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900">
                    Quem contrata? WorkeHub ou a gente?
                    <div className="text-secondary-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 transition-all duration-300 group-open:rotate-180"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500">
                    This is the second item's accordion body.
                  </div>
                </details>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  src="/image/work.png"
                  alt="Descrição da imagem"
                  width={500}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
