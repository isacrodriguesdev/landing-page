import Contract from '@/components/contract'
import Header from '@/components/header'
import Banner from '@/components/banner'
import Card from '@/components/card'
import Carousel from '@/components/carousel'
import Freela from '@/components/freela'
import Faq from '@/components/otherComponents/faq'
import SimpleForm from '@/components/simple-form'

export default function Home() {
  return (
    <>
     <Header />
     <Banner />
     <Contract />
     <Carousel />
     <Freela />
     <Card />
     {/* <Peoples /> */}
     {/* <Feedbacks /> */}
     {/* <Info /> */}
     {/* <NewSletter /> */}
     <Faq />
     <SimpleForm />
     {/* <Footer /> */}
    </>
  )
}
