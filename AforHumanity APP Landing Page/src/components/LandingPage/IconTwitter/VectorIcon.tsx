import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M17.9525 4.92007C17.9647 5.09639 17.9647 5.2727 17.9647 5.45064C17.9647 10.8725 13.8371 17.1256 6.28966 17.1256V17.1224C4.06013 17.1256 1.8769 16.487 0 15.2829C0.324193 15.3219 0.65001 15.3414 0.97664 15.3422C2.82429 15.3438 4.61913 14.7238 6.07272 13.5823C4.31688 13.549 2.77717 12.4041 2.23928 10.7328C2.85436 10.8514 3.48812 10.827 4.09181 10.6621C2.17753 10.2753 0.800325 8.59344 0.800325 6.64016C0.800325 6.62229 0.800325 6.60522 0.800325 6.58816C1.37071 6.90585 2.00934 7.08217 2.6626 7.10167C0.859638 5.89671 0.30388 3.49818 1.39265 1.6229C3.47593 4.18637 6.54967 5.74477 9.84928 5.90971C9.51859 4.48457 9.97034 2.99117 11.0364 1.98934C12.689 0.435816 15.2882 0.515442 16.8418 2.16728C17.7607 1.98609 18.6415 1.6489 19.4475 1.17114C19.1412 2.12097 18.5001 2.92779 17.6437 3.44049C18.457 3.34461 19.2517 3.12686 20 2.79454C19.4491 3.62005 18.7552 4.33913 17.9525 4.92007Z'
      fill='black'
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
