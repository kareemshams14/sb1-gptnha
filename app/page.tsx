import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { Features } from '@/components/features';
import { Whys } from '@/components/why-us';
import { Contact } from '@/components/contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Features />
      {/* <HowItWorksSection /> Removed */}
      <Whys />
      <Contact />
    </main>
  );
}
