import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import Products from '@/components/Products';
import About from '@/components/About';
import Stats from '@/components/Stats';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Differentials from '@/components/Differentials';
import HowToBuy from '@/components/HowToBuy';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Products />
        <About />
        <Stats />
        <Gallery />
        <Testimonials />
        <Differentials />
        <HowToBuy />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
