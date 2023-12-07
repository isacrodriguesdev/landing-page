import Image from "next/image";

export default function Header() {
    return (
      <>
        <nav className="bg-white border-gray-200 h-1/2">
          <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-3 pl-0">
            <a
              href="/"
              className="flex items-center space-x-3"
            >
              <Image
                src="/image/LogoAzul.png"
                width={32}
                height={32}
                alt="Picture of the author"
                className="rounded-xl"
              />
              <span className="self-center font-bold whitespace-nowrap text-3xl text-primary">
                WorkeHub
              </span>
            </a>
            <div
              className="hidden h-20 md:block md:w-auto justify-center content-center mt-5"
              id="navbar-default"
            >
              <a href="" className="">
                <button
                  type="button"
                  className="py-4 px-4 inline-flex items-center gap-x-2 text-lg font-bold rounded-lg bg-gradient-to-l from-secundary to-terciary text-white disabled:opacity-50 disabled:pointer-events-none"
                >
                  Experimente Grátis
                </button>
              </a>
            </div>
          </div>
        </nav>
      </>
    );
  }
  