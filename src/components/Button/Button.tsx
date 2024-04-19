import * as React from 'react';

import { GenerateEvent } from '@utils';

import { ButtonContainer } from './styles';

interface IProps {
  type?: 1 | 2;
  title?: string;
}

export default function Button(props: IProps): React.ReactElement {
  const { type = 1, title = 'Хочу начать говорить!' } = props;

  return (
    <ButtonContainer className={`Button ${type === 1 ? 'one' : 'two'}`} onClick={GenerateEvent}>
      {title}

      <svg
        width="19"
        height="15"
        fill="none"
        viewBox="0 0 19 15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.999194 6.44957L-0.000806017 6.45003L0.000105968 8.45002L1.00011 8.44957L0.999194 6.44957ZM18.5985 8.14865C18.9889 7.75795 18.9886 7.12478 18.5979 6.73444L12.231 0.37338C11.8403 -0.0169665 11.2071 -0.0166779 10.8168 0.374024C10.4264 0.764727 10.4267 1.39789 10.8174 1.78824L16.4769 7.44251L10.8226 13.1019C10.4323 13.4926 10.4325 14.1258 10.8232 14.5162C11.2139 14.9065 11.8471 14.9062 12.2375 14.5155L18.5985 8.14865ZM1.00011 8.44957L17.8915 8.44187L17.8906 6.44187L0.999194 6.44957L1.00011 8.44957Z"
          fill="white"
        />
      </svg>
    </ButtonContainer>
  );
}
