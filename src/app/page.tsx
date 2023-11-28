import { FirstSection } from '@/components/FirstSection'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { SecondSection } from '@/components/SecondSection'
import Image from 'next/image'

export default function Home() {
  return (
    <div style={{background: "linear-gradient(90deg, #2980b9 0%, rgba(0, 128, 168, 0.6) 95.83%)"}}>
    <Header/>
    <FirstSection/>
    <SecondSection/>
    <Footer/>
    </div>
  )
}
