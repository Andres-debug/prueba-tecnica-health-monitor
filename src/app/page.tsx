import { FirstSection } from '@/components/FirstSection'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { SecondSection } from '@/components/SecondSection'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
    <Header/>
    <FirstSection/>
    <SecondSection/>
    <Footer/>
    </div>
  )
}
