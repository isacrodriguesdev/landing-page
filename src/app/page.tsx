import Contract from '@/components/contract'
import Header from '@/components/header'
import Banner from '@/components/banner'
import Card from '@/components/card'
import Carousel from '@/components/carousel'
import Freela from '@/components/freela'
import Faq from '@/components/otherComponents/faq'
import SimpleForm from '@/components/simple-form'
import MenageOpportunities from '@/components/manageOpportunities'
import Peoples from '@/components/Peoples'

export default function Home() {
  return (
    <>
     <Header />
     <Banner />
     <Contract />
     <Carousel />
     <Freela />
     <Card />
     <Peoples />
     {/* <Feedbacks /> */}
     <MenageOpportunities />
     {/* <Newsletter /> */}
     <Faq />
     <SimpleForm />
     {/* <Footer /> */}
    </>
  )
}
