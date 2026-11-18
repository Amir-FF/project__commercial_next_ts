import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const base: IconProps = {
  viewBox: '0 0 16 16',
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  'aria-hidden': true,
};

export function CalendarIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M15,2 C15.552,2 16,2.448 16,3 L16,5 L0,5 L0,3 C0,2.448 0.448,2 1,2 L3,2 L3,0 L5,0 L5,2 L11,2 L11,0 L13,0 L13,2 L15,2 Z M0,6 L16,6 L16,15 C16,15.6 15.6,16 15,16 L1,16 C0.4,16 0,15.6 0,15 L0,6 Z" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8,0 C3.6,0 0,3.6 0,8 C0,12.4 3.6,16 8,16 C12.4,16 16,12.4 16,8 C16,3.6 12.4,0 8,0 Z M12,9 L7,9 L7,4 L9,4 L9,7 L12,7 L12,9 Z" />
    </svg>
  );
}

export function CommentIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M8,0 C3.6,0 0,3.1 0,7 C0,10.9 3.6,14 8,14 C8.4,14 8.8,14 9.1,13.9 L14,16 L14,11.6 C15.2,10.4 16,8.8 16,7 C16,3.1 12.4,0 8,0 Z"
        transform="translate(8.000000, 8.000000) scale(-1, 1) translate(-8.000000, -8.000000)"
      />
    </svg>
  );
}

export function SearchThinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
      <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 0 1-1.414 1.414l2.393 2.393a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414z" />
    </svg>
  );
}

/** Right-pointing chevron; rotate it for the "previous" arrow. */
export function ChevronRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5.025 16L4 15.009 11.25 8 4 .991 5.025 0l7.762 7.504a.684.684 0 0 1 0 .992L5.025 16z" />
    </svg>
  );
}
