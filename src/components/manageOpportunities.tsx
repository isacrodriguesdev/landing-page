import Image from "next/image";

export default function MenageOpportunities() {
  return (
    <>
      <section className="bg-white h-screen flex justify-center items-center">
        <div className="flex relative isolate overflow-hidden bg-blackLight py-24 sm:py-32 rounded-xl mx-auto max-w-7xl px-10 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center py-10 px-64 gap-10">
            <div className="md:w-1/2">
              <Image
                src="/image/MenageImage.png"
                alt="Menage"
                width={552.96}
                height={415.387}
              />
            </div>
            <div className="md:w-11/12 py-10 mt-4 md:mt-0 md:ml-8">
              <h1 className="text-primary max-w-lg space-y-1 text-3xl font-bold mb-4 w-full pl-6">
                Gerencie suas oportunidades de forma simples e fácil
              </h1>
              <ul className="text-white text-md mb-4 pl-6">
                <li>
                  <p>Cadastre uma vaga de forma simples</p>
                </li>
                <Image
                src="/image/Line.png"
                alt="Menage"
                width={552.96}
                height={415.387}
              />
                <li>
                  <p>Receba candidatos qualificados</p>
                </li>
                <Image
                src="/image/Line.png"
                alt="Menage"
                width={552.96}
                height={415.387}
              />
                <li>
                  <p>Gerencie e centralize o processo de R&S </p>
                </li>
                <Image
                src="/image/Line.png"
                alt="Menage"
                width={552.96}
                height={415.387}
              />
                <li>
                  <p>Receba consultoria do nosso time </p>
                </li>
                <Image
                src="/image/Line.png"
                alt="Menage"
                width={552.96}
                height={415.387}
              />
              </ul>
              <button
                type="button"
                className="py-4 px-4 ml-6 inline-flex items-center gap-x-2 text-lg font-bold rounded-lg bg-gradient-to-l from-secundary to-terciary text-white disabled:opacity-50 disabled:pointer-events-none"
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
