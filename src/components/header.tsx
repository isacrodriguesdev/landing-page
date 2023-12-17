import Image from "next/image";

export default function Header() {
    return (
      <>
        <nav className="bg-white border-gray-200 h-1/2">
          <div className="max-w-7xl flex 2xl:justify-between xl:justify-between lg:justify-around md:justify-around sm:justify-around items-center mx-auto">
            <a
              href="/"
              className="flex items-center"
            >
              <Image
                src="/image/LogoAzul.png"
                width={32}
                height={32}
                alt="Picture of the author"
                className="lg:justify-between rounded-xl"
              />
              <span className="self-center xl:ml-4 font-bold whitespace-nowrap text-3xl text-primary">
                WorkeHub
              </span>
            </a>
            <div
              className="h-20 md:block md:w-auto justify-center content-center mt-5"
              id="navbar-default"
            >
              <a href="" className="">
                <button
                  type="button"
                  className="self-center whitespace-nowrap py-4 px-4 inline-flex items-center text-lg font-bold rounded-lg bg-gradient-to-l from-secundary to-terciary text-white"
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
  