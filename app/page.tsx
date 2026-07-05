import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ScrollStory from '@/components/ScrollStory'
import RaceEventSection from '@/components/RaceEventSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import { SmoothCursor } from '@/components/ui/smooth-cursor'

export default function Home() {
  return (
    <div className="cursor-none">
      <SmoothCursor />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ScrollStory />
      <RaceEventSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
