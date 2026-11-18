import type { Metadata } from 'next';
import { AboutSection } from '@/components/home/AboutSection';
import { BeyondSection } from '@/components/home/BeyondSection';
import { CustomersSection } from '@/components/home/CustomersSection';
import { ExcellenceSection } from '@/components/home/ExcellenceSection';
import { HeroSlider } from '@/components/home/HeroSlider';
import { LatestNewsSection } from '@/components/home/LatestNewsSection';
import { ProjectsSection } from '@/components/home/ProjectsSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { StatsSection } from '@/components/home/StatsSection';
import { ContactSection } from '@/components/contact/ContactSection';

export const metadata: Metadata = { title: 'Home' };

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <ServicesSection />
      <AboutSection />
      <StatsSection />
      <ProjectsSection />
      <BeyondSection />
      <ExcellenceSection />
      <CustomersSection />
      <ContactSection />
      <LatestNewsSection />
    </>
  );
}
