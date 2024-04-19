import * as React from 'react';

interface IProps {
  onClick: () => void;
}

export default function MobileMenu(props: IProps): React.ReactElement {
  const { onClick = () => null } = props;

  return (
    <svg
      width="35"
      height="18"
      fill="none"
      onClick={onClick}
      viewBox="0 0 35 18"
      className="MobileMenu"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="35" y1="1" x2="14" y2="1" stroke="black" strokeWidth="2" />
      <line x1="35" y1="9" x2="6.99383e-08" y2="9" stroke="black" strokeWidth="2" />
      <line x1="35" y1="17" x2="8.74228e-08" y2="17" stroke="black" strokeWidth="2" />
    </svg>
  );
}
