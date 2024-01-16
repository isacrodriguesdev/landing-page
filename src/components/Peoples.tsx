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
              <div className="bg-white rounded-xl 3sm:block p-6">
                <div className="3sm:max-w-sm flex-col flex max-w-sm 3sm:p-2 rounded-lg">
                  <div className="flex flex-row">
                    <div className="bg-gradient-to-r from-secundary to-primary w-8 h-8 align-top flex justify-center items-center rounded-xl">
                      <FileText size={18} color="white" />
                    </div>
                    <h5 className="mb-2 text-lg ml-2 font-sans font-semibold tracking-tight text-black">
                      Entrevista técnica e comportamental
                    </h5>
                  </div>
                  <p className="3sm:text-sm font-sans ml-2 lg:text-lg text-black mt-2 ">
                    Gostamos de olhar nos olhos das pessoas e propiciar uma boa
                    experiência para o candidato
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl 3sm:block p-6">
                <div className="3sm:max-w-sm flex-col flex max-w-sm 3sm:p-2 p-20 rounded-lg">
                  <div className="flex flex-row">
                    <div className="bg-gradient-to-r from-secundary to-primary w-8 h-8 align-top flex justify-center items-center rounded-xl">
                      <FileCode size={18} color="white" />
                    </div>
                    <h5 className="mb-2 text-lg ml-2 font-sans font-semibold tracking-tight text-black">
                      Entrevista técnica e comportamental
                    </h5>
                  </div>
                  <p className="3sm:text-sm font-sans ml-2 lg:text-lg text-black mt-2 ">
                    Gostamos de olhar nos olhos das pessoas e propiciar uma boa
                    experiência para o candidato
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl xsm:hidden 3sm:block p-6">
                <div className="3sm:max-w-sm flex-col flex max-w-sm 3sm:p-2 p-20 rounded-lg">
                  <div className="flex flex-row">
                    <div className="bg-gradient-to-r from-secundary to-primary w-8 h-8 align-top flex justify-center items-center rounded-xl">
                      <FilePieChart size={18} color="white" />
                    </div>
                    <h5 className="mb-2 text-lg ml-2 font-sans font-semibold tracking-tight text-black">
                      Entrevista técnica e comportamental
                    </h5>
                  </div>
                  <p className="3sm:text-sm font-sans ml-2 lg:text-lg text-black mt-2 ">
                    Gostamos de olhar nos olhos das pessoas e propiciar uma boa
                    experiência para o candidato
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl xsm:hidden 3sm:block p-6">
                <div className="3sm:max-w-sm flex-col flex max-w-sm 3sm:p-2 p-20 rounded-lg">
                  <div className="flex flex-row">
                    <div className="bg-gradient-to-r from-secundary to-primary w-8 h-8 align-top flex justify-center items-center rounded-xl">
                      <Code2 size={18} color="white" />
                    </div>
                    <h5 className="mb-2 text-lg ml-2 font-sans font-semibold tracking-tight text-black">
                      Entrevista técnica e comportamental
                    </h5>
                  </div>
                  <p className="3sm:text-sm font-sans ml-2 lg:text-lg text-black mt-2 ">
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
