import Image from "next/image";
import { FileText, FileCode, FilePieChart, Code2 } from "lucide-react";

export default function Peoples() {
  return (
    <>
      <section className="items-center 3sm:mt-40 2sm:py-20 3sm:py-0 2sm:mt-40 md:mt-0 flex justify-center place-items-center">
        <div className="h-fit xsm:py-80 3sm:py-40 w-full bg-[url('/image/saving.png')] bg-no-repeat bg-cover">
          <div className="content-center"> 
          <h3 className="text-3xl py-6 text-white text-center flex justify-center">
            Nossa forma de cuidar das pessoas
          </h3>
          <div className="flex justify-center 3sm:grid sm:flex gap-4">
            <div className="bg-white rounded-xl">
              <div className="bg-emerald-400 w-10 h-10 ml-4 align-top flex justify-center items-center rounded-lg">
                <FileText />
              </div>
              <div className="3sm:max-w-sm max-w-sm 3sm:p-2 bg-white rounded-lg">
                <h5 className="3sm:text-xl mb-2 text-2xl ml-2 font-sans font-semibold tracking-tight text-black">
                  Avaliação de Candidaturas
                </h5>
                <p className="3sm:text-sm font-sans ml-2 text-lg font-normal text-blackLight">
                  Usamos a inteligência artificial para identificar os
                  candidatos mais compatíveis com a vaga ofertada
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl">
              <div className="bg-emerald-400 w-10 h-10 ml-4 align-top flex justify-center items-center rounded-lg">
                <FileCode />
              </div>
              <div className="3sm:max-w-sm max-w-sm 3sm:p-2 rounded-lg">
                <h5 className="3sm:text-xl mb-2 text-2xl ml-2 font-sans font-semibold tracking-tight text-black">
                  Avaliação dos projetos
                </h5>
                <p className="3sm:text-sm font-sans ml-2 text-lg font-normal text-blackLight">
                  Avaliamos os projetos de cada profissional que atendem os
                  requisitos das vagas
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl xsm:hidden 3sm:block">
              <div className="bg-emerald-400 w-10 h-10 ml-4 align-top flex justify-center items-center rounded-lg">
                <FilePieChart />
              </div>
              <div className="3sm:max-w-sm max-w-sm 3sm:p-2  rounded-lg">
                <h5 className="3sm:text-xl mb-2 text-2xl ml-2 font-sans font-semibold tracking-tight text-black">
                  Análise técnica e comportamental
                </h5>
                <p className="3sm:text-sm font-sans ml-2 text-lg font-normal text-blackLight">
                  Avaliamos as capacidades técnicas e comportamentais para
                  assegurar as competências necessárias
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl xsm:hidden 3sm:block">
              <div className="bg-emerald-400 w-10 h-10 ml-4 align-top flex justify-center items-center rounded-lg">
                <Code2 />
              </div>
              <div className="3sm:max-w-sm max-w-sm 3sm:p-2  rounded-lg">
                <h5 className="3sm:text-xl mb-2 text-2xl ml-2 font-sans font-semibold tracking-tight text-black">
                  Entrevista técnica e comportamental
                </h5>
                <p className="3sm:text-sm font-sans ml-2 text-lg font-normal text-blackLight">
                  Gostamos de olhar nos olhos das pessoas e propiciar uma boa
                  experiência para o candidato
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
