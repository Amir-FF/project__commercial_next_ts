import type { Metadata } from 'next';
import { ContactSection } from '@/components/contact/ContactSection';
import { PageBanner } from '@/components/ui/PageBanner';

export const metadata: Metadata = { title: 'Contact Us' };

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" />
      <ContactSection />
    </>
  );
}
