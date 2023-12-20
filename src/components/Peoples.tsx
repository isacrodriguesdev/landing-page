import Image from "next/image";

export default function Peoples() {
  return (
    <>
      <section className="items-center 3sm:mt-40 2sm:py-20 2sm:mt-40 md:mt-0 flex justify-center place-items-center">
        <div className="h-fit xsm:py-80 3sm:py-40 w-full bg-[url('/image/saving.png')] bg-no-repeat bg-cover">
          <h1 className="text-3xl py-6 text-white text-center flex justify-center">
            Nossa forma de cuidar das pessoas
          </h1>
          <div className="flex justify-center gap-4">
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
              {/* Image
            src=""
            alt=""
            width={}
            height={}
            className=""  
             /> */}
              <h5 className="mb-4 text-2xl font-sans font-semibold tracking-tight text-black">
                Avaliação de Candidaturas
              </h5>
              <p className="font-sans text-lg font-normal text-blackLight">
                Usamos a inteligência artificial para identificar os candidatos
                mais compatíveis com a vaga ofertada
              </p>
            </div>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
              <h5 className="mb-4 text-2xl font-sans font-semibold tracking-tight text-black">
                Avaliação dos projetos
              </h5>
              <p className="font-sans text-lg font-normal text-blackLight">
                Avaliamos os projetos de cada profissional que atendem os
                requisitos das vagas
              </p>
            </div>
            <div className="xsm:hidden lg:block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
              <h5 className="mb-4 text-2xl font-sans font-semibold tracking-tight text-black">
                Análise técnica e comportamental
              </h5>
              <p className="font-sans text-lg font-normal text-blackLight">
                Avaliamos as capacidades técnicas e comportamentais para
                assegurar as competências necessárias
              </p>
            </div>
            <div className="xsm:hidden lg:block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
              <h5 className="mb-4 text-2xl font-sans font-semibold tracking-tight text-black">
                Entrevista técnica e comportamental
              </h5>
              <p className="font-sans text-lg  text-blackLight">
                Gostamos de olhar nos olhos das pessoas e propiciar uma boa
                experiência para o candidato
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
