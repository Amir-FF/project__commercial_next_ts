import iconEmail from '@/assets/images/contact/icon-email.png';
import iconLocation from '@/assets/images/contact/icon-location.png';
import iconPhone from '@/assets/images/contact/icon-phone.png';

export const navItems = [
  { label: 'home', href: '/' },
  { label: 'blog', href: '/blog' },
  { label: 'about', href: '/about' },
  { label: 'contact us', href: '/contact-us' },
] as const;

export const contactInfo = [
  { title: 'Contact Us', value: '+98000000', icon: iconPhone },
  { title: 'Email', value: 'Amir.FF@gmail.com', icon: iconEmail },
  { title: 'Address', value: 'Iran...', icon: iconLocation },
] as const;

export const mapEmbedUrl =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.0492680069256!2d56.6024900150503!3d29.237835582183003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3efe6055115a2c51%3A0xa0ce29cb38d147ac!2zS2VybWFuIFByb3ZpbmNlLCBCYWZ0LCDaqdmI2obZhyDYp9mF2KfZhSDYrtmF24zZhtuMIDQ32IwgSXJhbg!5e1!3m2!1sen!2sus!4v1632983114585!5m2!1sen!2sus';

export const footerColumns = [
  {
    title: 'Articles',
    links: ['Article number one', 'Article number two', 'Article number three', 'Article number four'],
  },
  {
    title: 'Projects',
    links: ['Project number one', 'Project number two', 'Project number three'],
  },
  {
    title: 'Links',
    links: ['site builder', 'Spud Information Technology', 'newsbot Newswit', 'Bulk email sending'],
  },
] as const;
