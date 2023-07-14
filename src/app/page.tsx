import About from '@/components/About'
import Benefit from '@/components/Benefit'
import Feature from '@/components/Feature'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Testimonials from '@/components/Testimonials'
import Visitor from '@/components/Visitor'
import Image from 'next/image'

export default function Home() {
  return (
<main>
  <Header/>
  <Benefit/>
  <Visitor/>
  <Testimonials/>
  <Feature/>
  <About/>
  <Footer/>
</main>
  )
}
