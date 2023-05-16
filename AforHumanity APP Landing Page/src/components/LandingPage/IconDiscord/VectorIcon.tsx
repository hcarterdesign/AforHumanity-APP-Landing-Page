import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M16.9308 1.64145C15.6561 1.05655 14.2892 0.625624 12.8599 0.378812C12.8339 0.374049 12.8079 0.385953 12.7945 0.409761C12.6187 0.722441 12.4239 1.13036 12.2876 1.45098C10.7503 1.22084 9.22099 1.22084 7.71527 1.45098C7.57887 1.12323 7.37707 0.722441 7.20048 0.409761C7.18707 0.386747 7.16107 0.374843 7.13504 0.378812C5.70659 0.624835 4.33963 1.05576 3.06411 1.64145C3.05307 1.64622 3.04361 1.65416 3.03732 1.66447C0.444493 5.5381 -0.265792 9.31653 0.0826501 13.0481C0.0842267 13.0664 0.0944749 13.0838 0.108665 13.0949C1.81934 14.3512 3.47642 15.1139 5.10273 15.6194C5.12876 15.6273 5.15634 15.6178 5.1729 15.5964C5.55761 15.071 5.90054 14.5171 6.19456 13.9346C6.21192 13.9004 6.19535 13.86 6.15989 13.8465C5.61594 13.6401 5.098 13.3886 4.59978 13.1029C4.56037 13.0798 4.55721 13.0235 4.59347 12.9965C4.69831 12.9179 4.80318 12.8362 4.9033 12.7537C4.92141 12.7386 4.94665 12.7354 4.96794 12.7449C8.24107 14.2393 11.7846 14.2393 15.0191 12.7449C15.0404 12.7346 15.0657 12.7378 15.0846 12.7529C15.1847 12.8354 15.2896 12.9179 15.3952 12.9965C15.4314 13.0235 15.4291 13.0798 15.3897 13.1029C14.8914 13.3941 14.3735 13.6401 13.8288 13.8457C13.7933 13.8592 13.7775 13.9004 13.7949 13.9346C14.0952 14.5163 14.4381 15.0702 14.8157 15.5956C14.8315 15.6178 14.8599 15.6273 14.8859 15.6194C16.5201 15.1139 18.1772 14.3512 19.8879 13.0949C19.9028 13.0838 19.9123 13.0671 19.9139 13.0489C20.3309 8.73478 19.2154 4.98734 16.9568 1.66526C16.9513 1.65416 16.9419 1.64622 16.9308 1.64145ZM6.68335 10.776C5.69792 10.776 4.88594 9.87126 4.88594 8.76019C4.88594 7.64912 5.68217 6.74441 6.68335 6.74441C7.69239 6.74441 8.49651 7.65706 8.48073 8.76019C8.48073 9.87126 7.68451 10.776 6.68335 10.776ZM13.329 10.776C12.3435 10.776 11.5316 9.87126 11.5316 8.76019C11.5316 7.64912 12.3278 6.74441 13.329 6.74441C14.338 6.74441 15.1421 7.65706 15.1264 8.76019C15.1264 9.87126 14.338 10.776 13.329 10.776Z'
      fill='black'
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
