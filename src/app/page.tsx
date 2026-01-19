import { Footer } from '@/components/layout/Footer';
import { About } from '@/components/sections/About';
import { Hero } from '@/components/sections/Hero';
import { Industries } from '@/components/sections/Industries';
import { Services } from '@/components/sections/Services';

export default function Home() {
  return (
    <main className="min-h-screen pt-24 bg-background text-foreground selection:bg-primary selection:text-black">
      <Hero />
      <Services />
      <About />
      <Industries />
      <Footer />
    </main>
  );
}
