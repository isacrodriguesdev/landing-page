import Image from "next/image";

interface StateProps {
  title: string;
  description: string;
  image: string;
  inverted?: boolean;
  items: string[];
}

type Props = StateProps;

export default function Freela({
  title,
  description,
  image,
  inverted,
  items,
}: Props) {
  return (
    <section className="flex w-9/12 mx-auto flex-col justify-center items-center my-24">
      <div
        className={`flex items-center md:gap-0 xl:gap-52 ${
          inverted ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <div className={inverted ? "sm:mr-0 lg:mr-6" : "sm:ml-0 lg:ml-6"}>
          <Image
            className="object-contain xsm:hidden lg:block"
            src={image}
            alt="Freelancer"
            width={480}
            height={480}
          />
        </div>

        <div className="flex flex-col md:justify-center xsm:px-4 lg:px-0">
          <div>
            <h3 className="2sm:text-3xl xsm:text-3xl xsm:text-start text-black font-semibold mb-4 lg:text-start xl:text-5xl 3sm:text-3xl font-Orbitron tracking-tight leading-none md:text-5xl">
              {title}
            </h3>
            <p className="max-w-2xl font-sans 3sm:text-xl xl:text-xl text-gray-500 lg:mb-8 md:text-lg lg:text-xl mt-8 mb-8">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 flex-col w-2/3">
            {items.map((item) => (
              <span
                className="inline-flex items-center rounded-full xsm:w-60 md:w-fit bg-gray-50 lg:px-3 py-1.5 text-xs font-medium text-gray-500 ring-1 ring-inset  ring-gray-500/10"
                key={item}
              >
                <svg
                  className="w-3.5 h-3.5 me-2 text-secundary flex-shrink-0"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <div className="flex items-center xl:text-md font-sans md:text-sm font-semibold 3sm:text-lg">
                  {item}
                </div>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
