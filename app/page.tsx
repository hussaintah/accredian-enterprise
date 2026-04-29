import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
import Programs from '@/components/Programs';
import Partners from '@/components/Partners';
import Testimonials from '@/components/Testimonials';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Programs />
      <Partners />
      <Testimonials />
      <LeadForm />
      <Footer />
    </main>
  );
}
