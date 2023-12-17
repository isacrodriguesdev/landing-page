import Image from "next/image";

export default function MenageOpportunities() {
  return (
    <>
            <section className="bg-white h-screen flex justify-center items-center">
        <div className="flex relative isolate overflow-hidden bg-blackLight py-24 sm:py-32 rounded-xl mx-auto max-w-7xl px-10 lg:px-8">
          <div className="bg-blackLight flex flex-col md:flex-row items-center px-32 gap-10">
            <div className="">
              <Image
                className="rounded-sm"
                src="/image/MenageImage.png"
                alt="Menage"
                width={632.96}
                height={595.387}
              />
            </div>
            <div className="max-w-2xl ">
              <h1 className="text-primary max-w-lg space-y-1 text-3xl font-bold mb-4 w-full pl-6">
                Gerencie suas oportunidades de forma simples e fácil
              </h1>
              <ul className="text-white text-md mb-6 pl-6">
                <li className="mb-2">
                  <p>Cadastre uma vaga de forma simples</p>
                  <Image src="/image/Line.png" alt="Menage" width={552.96} height={415.387} />
                </li>
                <li className="mb-2">
                  <p>Receba candidatos qualificados</p>
                  <Image src="/image/Line.png" alt="Menage" width={552.96} height={415.387} />
                </li>
                
                <li className="mb-2">
                  <p>Gerencie e centralize o processo de R&S</p>
                  <Image src="/image/Line.png" alt="Menage" width={552.96} height={415.387} />
                </li>

                <li className="mb-2">
                  <p>Receba consultoria do nosso time</p>
                  <Image src="/image/Line.png" alt="Menage" width={552.96} height={415.387} />
                </li>
                
              </ul>
              <button
                type="button"
                className="py-4 px-4 lg:ml-6 inline-flex items-center gap-x-2 text-lg font-bold rounded-lg bg-gradient-to-l from-secundary to-terciary text-white disabled:opacity-50 disabled:pointer-events-none"
              >
                Publicar uma vaga
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
