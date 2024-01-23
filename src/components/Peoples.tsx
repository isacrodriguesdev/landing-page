import Image from "next/image";
import { FileText, FileCode, FilePieChart, Code2 } from "lucide-react";

export default function Peoples() {
  return (
    <>
      <section className="items-center 2sm:py-20 bg-black 3sm:py-0 md:mt-0 flex justify-center place-items-center">
        <div className="h-fit w-full">
          <div className="content-center">
            <h3 className="text-3xl py-10 text-white font-bold text-center flex justify-center">
              Nossa forma de cuidar das pessoas
            </h3>
            <div className="flex justify-center sm:grid-cols-2 lg:flex xsm:grid gap-4 mb-16">
              <div className="bg-white rounded-xl 3sm:block xsm:p-4 lg:p-6">
                <div className="3sm:max-w-sm flex-col flex max-w-sm 3sm:p-2 rounded-lg">
                  <div className="flex flex-row">
                    <div className="bg-gradient-to-r from-secundary to-primary w-8 h-8 align-top flex justify-center items-center rounded-xl">
                      <FileText size={18} color="white" />
                    </div>
                    <h5 className="ml-2 text-md font-sans font-semibold tracking-tight text-black">
                    Avaliação de Candidaturas
                    </h5>
                  </div>
                  <p className="3sm:text-sm font-sans ml-2 lg:text-lg text-black mt-2 ">
                  Usamos a inteligência artificial para identificar os candidatos mais compatíveis com a vaga ofertada
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl 3sm:block xsm:p-4 lg:p-6">
                <div className="3sm:max-w-sm flex-col flex max-w-sm 3sm:p-2 rounded-lg">
                  <div className="flex flex-row">
                    <div className="bg-gradient-to-r from-secundary to-primary w-8 h-8 align-top flex justify-center items-center rounded-xl">
                      <FileCode size={18} color="white" />
                    </div>
                    <h5 className="ml-2 text-md font-sans font-semibold tracking-tight text-black">
                    Avaliação dos projetos  
                    </h5>
                  </div>
                  <p className="3sm:text-sm font-sans ml-2 lg:text-lg text-black mt-2 ">
                  Avaliamos os projetos de cada profissional que atendem os requisitos das vagas
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl 3sm:block xsm:p-4 lg:p-6">
                <div className="3sm:max-w-sm flex-col flex max-w-sm 3sm:p-2 rounded-lg">
                  <div className="flex flex-row">
                    <div className="bg-gradient-to-r from-secundary to-primary w-8 h-8 align-top flex justify-center items-center rounded-xl">
                      <FilePieChart size={18} color="white" />
                    </div>
                    <h5 className="ml-2 text-md font-sans font-semibold tracking-tight text-black">
                    Análise técnica e comportamental
                    </h5>
                  </div>
                  <p className="3sm:text-sm font-sans ml-2 lg:text-lg text-black mt-2 ">
                  Avaliamos as capacidades técnicas e comportamentais para assegurar as competências necessárias
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl 3sm:block xsm:p-4 lg:p-6">
                <div className="3sm:max-w-sm flex-col flex max-w-sm 3sm:p-2 rounded-lg">
                  <div className="flex flex-row">
                    <div className="bg-gradient-to-r from-secundary to-primary w-8 h-8 align-top flex justify-center items-center rounded-xl">
                      <Code2 size={18} color="white" />
                    </div>
                    <h5 className="ml-2 text-md font-sans font-semibold tracking-tight text-black">
                    Parte técnica e comportamental
                    </h5>
                  </div>
                  <p className="3sm:text-sm font-sans ml-2 lg:text-lg text-black mt-2 ">
                  Gostamos de olhar nos olhos das pessoas e propiciar uma boa experiência para o candidato
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
