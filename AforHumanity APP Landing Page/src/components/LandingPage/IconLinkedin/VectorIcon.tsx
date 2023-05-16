import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M18 1.32353V16.6765C18 17.0275 17.8606 17.3641 17.6123 17.6123C17.3641 17.8606 17.0275 18 16.6765 18H1.32353C0.972508 18 0.635863 17.8606 0.387653 17.6123C0.139443 17.3641 0 17.0275 0 16.6765L0 1.32353C0 0.972508 0.139443 0.635863 0.387653 0.387653C0.635863 0.139443 0.972508 0 1.32353 0L16.6765 0C17.0275 0 17.3641 0.139443 17.6123 0.387653C17.8606 0.635863 18 0.972508 18 1.32353V1.32353ZM5.29412 6.88235H2.64706V15.3529H5.29412V6.88235ZM5.53235 3.97059C5.53375 3.77036 5.49569 3.57182 5.42035 3.3863C5.34502 3.20078 5.23387 3.03191 5.09328 2.88935C4.95268 2.74678 4.78537 2.6333 4.60091 2.5554C4.41646 2.47749 4.21846 2.43668 4.01824 2.43529H3.97059C3.5634 2.43529 3.1729 2.59705 2.88497 2.88497C2.59705 3.1729 2.43529 3.5634 2.43529 3.97059C2.43529 4.37777 2.59705 4.76828 2.88497 5.05621C3.1729 5.34413 3.5634 5.50588 3.97059 5.50588V5.50588C4.17083 5.51081 4.37008 5.47623 4.55696 5.40413C4.74383 5.33202 4.91467 5.2238 5.0597 5.08565C5.20474 4.94749 5.32113 4.78212 5.40223 4.59897C5.48333 4.41582 5.52755 4.21848 5.53235 4.01824V3.97059ZM15.3529 10.2071C15.3529 7.66059 13.7329 6.67059 12.1235 6.67059C11.5966 6.6442 11.0719 6.75644 10.6019 6.9961C10.1318 7.23577 9.73285 7.59448 9.44471 8.03647H9.37059V6.88235H6.88235V15.3529H9.52941V10.8476C9.49115 10.3862 9.63649 9.92835 9.93387 9.57347C10.2313 9.2186 10.6567 8.9954 11.1176 8.95235H11.2182C12.06 8.95235 12.6847 9.48177 12.6847 10.8159V15.3529H15.3318L15.3529 10.2071Z'
      fill='black'
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
