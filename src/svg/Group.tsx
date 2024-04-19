import * as React from 'react';

interface IProps {
  type: 'type1';
}

export default function Group(props: IProps): React.ReactElement {
  const { type } = props;

  function getClassname(): string {
    return `Group ${type}`;
  }

  return (
    <svg
      width="177"
      height="119"
      fill="none"
      viewBox="0 0 177 119"
      className={getClassname()}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M135.586 28.7228C135.586 23.3383 131.322 18.9205 125.941 18.7291L10.3548 14.6183C4.69621 14.417 -0.000595093 18.9498 -0.000595093 24.612V83.5486C-0.000595093 89.3343 4.89455 93.9127 10.6674 93.5262L126.254 85.7882C131.506 85.4366 135.586 81.0741 135.586 75.8105V28.7228Z"
        fill="#FEE92F"
      />
      <path
        d="M79.8555 69.3359C79.8555 65.4699 82.9895 62.3359 86.8555 62.3359H169C172.866 62.3359 176 65.4699 176 69.3359V109.343C176 113.448 172.484 116.671 168.395 116.317L86.2508 109.195C82.6328 108.881 79.8555 105.852 79.8555 102.221V69.3359Z"
        stroke="#3EF43E"
        strokeWidth="2"
      />
      <path
        d="M45.4141 1L45.4141 27.5796"
        stroke="#F942A9"
        strokeWidth="2"
        strokeLinecap="square"
      />
      <path
        d="M37.6445 1L37.6445 27.5796"
        stroke="#F942A9"
        strokeWidth="2"
        strokeLinecap="square"
      />
      <path d="M29.875 1L29.875 27.5796" stroke="#F942A9" strokeWidth="2" strokeLinecap="square" />
      <path
        d="M22.1055 1L22.1055 27.5796"
        stroke="#F942A9"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  );
}
