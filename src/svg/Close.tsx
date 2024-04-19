import * as React from 'react';

interface IProps {
  onClick?: () => void;
}

export default function Close(props: IProps): React.ReactElement {
  const { onClick } = props;

  return (
    <svg
      width="16"
      height="16"
      fill="none"
      onClick={onClick}
      className="Close"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.55869 8.01589C5.16512 7.62826 4.81391 7.28742 4.46623 6.9404C3.05787 5.53584 1.65097 4.1301 0.245545 2.72318C-0.0836037 2.3947 -0.0818388 2.27638 0.250839 1.94084L1.99541 0.200441C2.26014 -0.0644592 2.41634 -0.0644592 2.68195 0.200441C4.39505 1.91288 6.10697 3.6262 7.81772 5.3404C7.87481 5.41149 7.92559 5.48742 7.9695 5.56733C8.47955 5.05166 8.94018 4.58631 9.3964 4.1245C10.7024 2.81531 12.0093 1.5067 13.3171 0.198675C13.5818 -0.0662252 13.7327 -0.0662252 14.0027 0.198675C14.6092 0.804415 15.2164 1.41192 15.8241 2.02119C16.0588 2.25695 16.0579 2.41413 15.8161 2.65695C14.1348 4.33878 12.4529 6.02002 10.7704 7.70066C10.6821 7.78896 10.5692 7.86932 10.4377 7.97704C10.7977 8.33024 11.118 8.64018 11.4331 8.95453C12.8714 10.3915 14.3089 11.829 15.7455 13.2671C16.0861 13.6079 16.0853 13.7166 15.7402 14.0618C15.1702 14.6334 14.5995 15.2044 14.0283 15.7748C13.7265 16.0759 13.5941 16.0742 13.2968 15.7748C11.5907 14.0677 9.88468 12.3606 8.17864 10.6534C8.12507 10.5923 8.07526 10.5281 8.02951 10.4609C7.94126 10.5492 7.8742 10.6066 7.81419 10.6667C6.10815 12.3738 4.40211 14.0809 2.69607 15.7881C2.41634 16.0689 2.27515 16.0689 1.99806 15.7881C1.39624 15.1947 0.797067 14.5996 0.20054 14.0026C-0.0694847 13.7316 -0.0641901 13.5921 0.205835 13.3183C1.90717 11.6159 3.60939 9.91317 5.31249 8.21015C5.37426 8.15011 5.45015 8.10155 5.55869 8.01589Z"
        fill="black"
      />
    </svg>
  );
}