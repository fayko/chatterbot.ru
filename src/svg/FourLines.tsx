import * as React from 'react';

interface IProps {
  color?: 'blue' | 'pink' | 'green';
  rotateDeg?: number;
}

export default function FourLines(props: IProps): React.ReactElement {
  const { color = 'blue', rotateDeg = 0 } = props;

  let currColor = '#7270FF';
  if (color === 'green') currColor = '#3EF43E';
  if (color === 'pink') currColor = '#F942A9';

  return (
    <svg
      width="73"
      height="63"
      fill="none"
      viewBox="0 0 73 63"
      className={`FourLines ${color}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotateDeg}deg)` }}
    >
      <path d="M71 61L2 61" stroke={currColor} strokeWidth="3" strokeLinecap="square" />
      <path d="M71 41.334L2 41.334" stroke={currColor} strokeWidth="3" strokeLinecap="square" />
      <path d="M71 21.666L2 21.666" stroke={currColor} strokeWidth="3" strokeLinecap="square" />
      <path d="M71 2L2 1.99999" stroke={currColor} strokeWidth="3" strokeLinecap="square" />
    </svg>
  );
}
