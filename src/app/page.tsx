// import Banner from '@/components/banner'
import Contract from '@/components/contract'
import Header from '@/components/header'
import Banner from '@/components/banner'
import Card from '@/components/card'
import Carousel from '@/components/carousel'
import { Cardo } from 'next/font/google'

export default function Home() {
  return (
    <>
     <Header />
     <Banner />
     <Contract />
     {/* <Carousel /> */}
     <Card />
    </>
  )
}
