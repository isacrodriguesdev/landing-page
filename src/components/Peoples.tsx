import { FileText, FileCode, FilePieChart, Code2 } from "lucide-react";

interface IItem {
  title: string;
  description: string;
  icon(): JSX.Element;
}

const iconSettings = {
  size: 18,
  color: "white",
};

const items: IItem[] = [
  {
    title: "Intermediamos o processo de contratação",
    description:
      "Através da nossa plataforma, você pode solicitar um freelancer para sua empresa ou projeto e receber propostas de profissionais qualificados",
    icon: () => <FileText size={iconSettings.size} color={iconSettings.color} />,
  },
  {
    title: "Resolução de disputas e conflitos",
    description:
      "Nossa equipe de suporte está pronta para ajudar em qualquer situação, desde a resolução de conflitos até a mediação de disputas",
    icon: () => <FileCode size={iconSettings.size} color={iconSettings.color} />,
  },
  {
    title: "Suporte especializado",
    description:
      "Nossa equipe de suporte está pronta para ajudar em qualquer situação, desde a resolução de conflitos até a mediação de disputas",
    icon: () => <FilePieChart size={iconSettings.size} color={iconSettings.color} />,
  },
  {
    title: "Redução de custo com contratação",
    description:
      "Nossa equipe de suporte está pronta para ajudar em qualquer situação, desde a resolução de conflitos até a mediação de disputas",
    icon: () => <Code2 size={iconSettings.size} color={iconSettings.color} />,
  },
];

export default function Peoples() {
  return (
    <>
      <section className="items-center 2sm:py-20 bg-black 3sm:py-0 md:mt-0 flex justify-center place-items-center">
        <div className="h-fit w-full">
          <div className="content-center">
            <h3 className="text-3xl py-10 text-white font-bold text-center flex justify-center">
              Uma nova forma de contratar
            </h3>
            <div className="flex justify-center sm:grid-cols-2 lg:flex xsm:grid gap-4 mb-16">
              {items.map(({ title, description, icon }) => (
                <div className="bg-white rounded-xl 3sm:block xsm:p-3 lg:p-4" key={title}>
                  <div className="3sm:max-w-sm flex-col flex max-w-sm rounded-lg">
                    <div className="bg-secundary w-8 h-8 align-top flex justify-center items-center rounded-xl">
                      {icon()}
                    </div>
                    <div className="flex flex-row items-center mt-2">
                      <h4 className="ml-2 text-lg font-sans font-semibold tracking-tight text-black">
                        {title}
                      </h4>
                    </div>
                    <p className="3sm:text-md font-sans ml-2 text-black mt-2 ">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
