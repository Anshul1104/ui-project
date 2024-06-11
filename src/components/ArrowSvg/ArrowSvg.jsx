/* eslint-disable react/prop-types */

const ArrowSvg = ({ className }) => {
  return (
    <svg
      className={className}
      width='8'
      height='12'
      viewBox='0 0 8 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1 1L6.71429 5.7619L1 11'
        stroke='#FF7361'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ArrowSvg;
