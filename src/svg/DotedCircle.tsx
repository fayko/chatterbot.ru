import * as React from 'react';

interface IProps {
  color: 'green' | 'yellow' | 'grey';
}

export default function DotedCircle(props: IProps) {
  const { color } = props;

  function getColor(): string {
    if (color === 'green') return '#3EF43E';
    if (color === 'grey') return '#F9F6EA';
    return '#FEE92F';
  }

  function getClassName(): string {
    let CN = 'DotedCircle';
    if (color === 'green') CN += 'Green';
    if (color === 'yellow') CN += 'Yellow';
    if (color === 'grey') CN += 'Grey';
    return CN;
  }

  return (
    <svg
      width="120"
      height="120"
      fill="none"
      viewBox="0 0 120 120"
      className={getClassName()}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M59.7443 0.000492287C47.8771 0.0512713 36.292 3.61942 26.454 10.2541C16.6148 16.8888 8.96494 26.2929 4.47038 37.2747C-0.0241744 48.2579 -1.16138 60.3272 1.20295 71.9555C3.56727 83.5852 9.32714 94.2512 17.7544 102.606C26.1817 110.962 36.897 116.631 48.5449 118.896C60.194 121.162 72.2522 119.923 83.1966 115.334C94.141 110.747 103.479 103.017 110.03 93.1217C116.581 83.2272 120.05 71.6125 119.999 59.745C119.928 43.8327 113.541 28.6002 102.242 17.3966C90.9426 6.19305 75.6564 -0.0639103 59.7443 0.000492287ZM78.3386 60.0002C78.9164 52.6249 89.798 52.6781 90.3351 60.0002C90.1072 67.1613 78.0022 67.8325 78.3386 60.0002ZM54.2764 60.0943C54.8407 52.719 65.7223 52.7859 66.2471 60.0943C66.018 67.2554 53.9401 67.9935 54.2764 60.0943ZM30.1872 60.2021C30.7515 52.8267 41.6478 52.88 42.185 60.2021C41.9571 67.3631 29.852 67.9935 30.1872 60.2021Z"
        fill={getColor()}
      />
    </svg>
  );
}
