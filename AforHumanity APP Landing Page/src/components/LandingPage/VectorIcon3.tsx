import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M20 10.0607C20 4.504 15.5233 0 10 0C4.47667 0 0 4.504 0 10.0607C0 15.0833 3.656 19.2453 8.43733 20V12.9693H5.89867V10.06H8.43733V7.844C8.43733 5.32267 9.93 3.92933 12.2147 3.92933C13.308 3.92933 14.4533 4.126 14.4533 4.126V6.602H13.1913C11.9493 6.602 11.5627 7.378 11.5627 8.174V10.0607H14.336L13.8927 12.9687H11.5627V20C16.344 19.2453 20 15.0833 20 10.0607Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
