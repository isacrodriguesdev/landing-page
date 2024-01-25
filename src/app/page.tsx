import Header from "@/components/header";
import Banner from "@/components/banner";
import Card from "@/components/card";
import Freela from "@/components/freela";
import Faq from "@/components/otherComponents/faq";
import SimpleForm from "@/components/simple-form";
import Peoples from "@/components/Peoples";
import Footer from "@/components/otherComponents/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto">
        <Freela
          title="Profissionais qualificados"
          description="Todos os freelancers passam por um processo de avaliação e validação de perfil para garantir a qualidade do serviço"
          image="/image/contract.png"
          items={[
            "Avaliação de perfil",
            "Analise de portfólio",
            "Validação de habilidades técnicas",
            "Referências de trabalhos anteriores",
          ]}
        />

        <Freela
          title="Contrate de forma simples"
          description="Simplifique o processo de contratação de freelancers para sua empresa ou projeto"
          image="/image/homem.png"
          inverted
          items={[
            "Solicite um freelancer",
            "Receba propostas",
            "Negocie valores e prazos",
            "Inicie o projeto",
          ]}
        />
        
      </main>
        <Card />
        <Peoples />
        <Faq />
        <SimpleForm />
      <Footer />
    </>
  );
}
