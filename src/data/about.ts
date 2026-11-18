import type { StaticImageData } from 'next/image';
import architect from '@/assets/images/about/architect.jpg';
import programManager from '@/assets/images/about/program-manager.jpg';

const teamText =
  'Lorem Ipsum is a fabricated text produced by the printing industry with the help of graphic designers and printers, and also newspapers and magazines in columns and rows as required.';

export const team: { id: string; role: string; name: string; text: string; image: StaticImageData }[] = [
  { id: 'architect', role: 'Architect', name: 'Henry Sanchez', text: teamText, image: architect },
  { id: 'program-manager', role: 'Program Manager', name: 'Alex Taylor', text: teamText, image: programManager },
];
