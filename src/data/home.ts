import type { StaticImageData } from 'next/image';
import buildingConstruction from '@/assets/images/home/services/building-construction.jpg';
import residentialComplex from '@/assets/images/home/services/residential-complex.jpg';
import roadBuilding from '@/assets/images/home/services/road-building.jpg';
import project1 from '@/assets/images/home/gallery/project-1.jpg';
import project2 from '@/assets/images/home/gallery/project-2.jpg';
import project3 from '@/assets/images/home/gallery/project-3.jpg';
import project4 from '@/assets/images/home/gallery/project-4.jpg';
import project5 from '@/assets/images/home/gallery/project-5.jpg';
import project6 from '@/assets/images/home/gallery/project-6.jpg';
import slide1 from '@/assets/images/home/excellence/slide-1.jpg';
import slide2 from '@/assets/images/home/excellence/slide-2.jpg';
import slide3 from '@/assets/images/home/excellence/slide-3.jpg';
import logo1 from '@/assets/images/home/customers/logo-1.png';
import logo2 from '@/assets/images/home/customers/logo-2.png';
import logo3 from '@/assets/images/home/customers/logo-3.png';
import logo4 from '@/assets/images/home/customers/logo-4.png';
import logo5 from '@/assets/images/home/customers/logo-5.png';

export const heroSlides = [
  { id: 'hero-1', background: '/images/backgrounds/hero-1.jpg' },
  { id: 'hero-2', background: '/images/backgrounds/hero-2.jpg' },
  { id: 'hero-3', background: '/images/backgrounds/hero-3.jpg' },
] as const;

export const services: { title: string; image: StaticImageData }[] = [
  { title: 'Road building', image: roadBuilding },
  { title: 'Building construction', image: buildingConstruction },
  { title: 'Construction of a residential complex', image: residentialComplex },
];

export const stats = [
  { top: 'Projects', bottom: 'Done', value: 68, durationMs: 68 * 29 },
  { top: 'Satisfaction Level', bottom: 'Customers', value: 75, durationMs: 75 * 26 },
  { top: 'Projects', bottom: 'In Progress', value: 36, durationMs: 36 * 55 },
] as const;

/** Two rows of the gallery; `wide` images take the larger column. */
export const galleryRows: { id: string; image: StaticImageData; wide: boolean }[][] = [
  [
    { id: 'project-1', image: project1, wide: false },
    { id: 'project-2', image: project2, wide: false },
    { id: 'project-3', image: project3, wide: true },
  ],
  [
    { id: 'project-4', image: project4, wide: true },
    { id: 'project-5', image: project5, wide: false },
    { id: 'project-6', image: project6, wide: false },
  ],
];

export const excellenceSlides: { id: string; image: StaticImageData }[] = [
  { id: 'slide-1', image: slide1 },
  { id: 'slide-2', image: slide2 },
  { id: 'slide-3', image: slide3 },
];

export const skills = [
  { label: 'Construction', value: 98, durationMs: 98 * 17 },
  { label: 'Design', value: 92, durationMs: 92 * 19 },
  { label: 'Implementation', value: 95, durationMs: 95 * 18 },
] as const;

export const customerLogos: { id: string; image: StaticImageData }[] = [
  { id: 'logo-1', image: logo1 },
  { id: 'logo-2', image: logo2 },
  { id: 'logo-3', image: logo3 },
  { id: 'logo-4', image: logo4 },
  { id: 'logo-5', image: logo5 },
];
