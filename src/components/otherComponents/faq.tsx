import Image from "next/image";

export default function faq() {
  return (
    <>
      <section className="flex bg-white justify-center w-9/12 mx-auto h-full">
        <div className="flex mx-auto grid-cols-1 justify-center sm:gap-y-20 lg:mx-0 lg:max-w-none py-8 xl:grid-cols lg:gap-8 xl:gap-0 lg:grid-cols-12">
          <div className="flex justify-end">
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-2 md:ml-0 h-fit max-w-md rounded-md bg-white">
                <div className="mb-8 text-center">
                  <h3 className="xsm:text-xl text-2xl md:text-4xl md:leading-tight text-black font-semibold mb-1">
                    Perguntas frequentes
                  </h3>
                  <p className="font-regular xsm:text-md text-gray-700">
                    Algumas das dúvidas mais frequentes
                  </p>
                </div>
                <details className="group">
                  <summary className="flex font-sans bg-gray-100 cursor-pointer list-none font-semibold items-center rounded-md justify-between p-4 text-md text-secondary-900">
                    O que é a WorkeHub?
                    <div className="text-secondary-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 transition-all duration-300 group-open:rotate-180"
                      >
                        <path
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="p-4 font-sans text-secondary-500">
                    A WorkeHub é uma plataforma especializada em conectar
                    profissionais de tecnologia com empresas que buscam suas
                    habilidades específicas.
                  </div>
                </details>
                <details className="group">
                  <summary className="flex font-sans bg-gray-100 cursor-pointer list-none font-semibold items-center rounded-md justify-between p-4 text-md text-secondary-900">
                    Quais os diferenciais da WorkeHub?
                    <div className="text-secondary-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 transition-all duration-300 group-open:rotate-180"
                      >
                        <path
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="p-4 font-sans text-secondary-500">
                    This is the second item's accordion body.
                  </div>
                </details>
                <details className="group">
                  <summary className="flex font-sans bg-gray-100 cursor-pointer list-none font-semibold items-center rounded-md justify-between p-4 text-md text-secondary-900">
                    Consigo contratar free-lancers diretamente?
                    <div className="text-secondary-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 transition-all duration-300 group-open:rotate-180"
                      >
                        <path
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="p-4 font-sans text-secondary-500">
                    This is the second item's accordion body.
                  </div>
                </details>
                <details className="group">
                  <summary className="flex font-sans bg-gray-100 cursor-pointer list-none font-semibold items-center rounded-md justify-between p-4 text-md text-secondary-900">
                    Qual o prazo para contratar um freelancer?
                    <div className="text-secondary-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 transition-all duration-300 group-open:rotate-180"
                      >
                        <path
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="p-4 font-sans text-secondary-500">
                    This is the second item's accordion body.
                  </div>
                </details>
                <details className="group">
                  <summary className="flex font-sans bg-gray-100 cursor-pointer list-none font-semibold items-center rounded-md justify-between p-4 text-md text-secondary-900">
                    Quais perfis encontro na WorkeHub?
                    <div className="text-secondary-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 transition-all duration-300 group-open:rotate-180"
                      >
                        <path
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="p-4 font-sans text-secondary-500">
                    This is the second item's accordion body.
                  </div>
                </details>
              </div>
              <div className="max-w-4xl">
                <Image
                  className="xsm:hidden lg:block flex justify-end"
                  src="/image/work.png"
                  alt="Descrição da imagem"
                  width={429.61}
                  height={429.61}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
