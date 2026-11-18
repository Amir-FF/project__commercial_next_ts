import type { StaticImageData } from 'next/image';
import concreteBridges from '@/assets/images/blog/concrete-bridges.jpg';
import cranes from '@/assets/images/blog/cranes.jpg';
import interiorCladding from '@/assets/images/blog/interior-cladding.jpg';

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  time: string;
  comments: number;
  image: StaticImageData;
}

export const posts: Post[] = [
  {
    id: 'concrete-bridges',
    title: 'Methods of constructing urban concrete structures and bridges',
    excerpt:
      'Complete explanation of bridge construction methods with pictures In this article, we plan to discuss in two parts the various bridge construction methods with detailed explanations and pictures of each stage. In the first part, we will discuss the methods of construction and construction of non-cable bridges, including the span-by-span method, the […]',
    date: 'October 1, 2021',
    time: '11:34 B.N',
    comments: 0,
    image: concreteBridges,
  },
  {
    id: 'cranes',
    title: '5 types of cranes needed in large structures',
    excerpt:
      '5 Crane Models Used in Construction Work A crane is a very powerful and heavy machine used to lift, lower, or move heavy objects. Cranes are generally used in construction and industrial work, as well as in assembling machines and structures […]',
    date: 'October 1, 2021',
    time: '11:33 B.N',
    comments: 0,
    image: cranes,
  },
  {
    id: 'interior-cladding',
    title: 'How to optimize the interior cladding of a building',
    excerpt:
      'Thermal insulation is one of the most important aspects of energy optimization. Date of publication: Tuesday, October 17, 2016 Thermal insulation is of great importance; in the past few decades, the increasing demand for energy conservation in buildings has led to the widespread use of opaque insulation materials in building envelopes and has also led to a great emphasis on reducing heating demand in cold seasons, […]',
    date: 'October 1, 2021',
    time: '11:32 B.N',
    comments: 0,
    image: interiorCladding,
  },
];

/** Newest-first list used by the blog sidebar and the home page. */
export const recentPosts: Post[] = [...posts].reverse();
