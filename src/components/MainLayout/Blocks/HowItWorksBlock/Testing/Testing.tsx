import * as React from 'react';

import { GenerateEvent } from '@utils';

import { TEST } from './consts';
import {
  TestText,
  TestLink,
  TestInfo,
  TestTitle,
  TestNumber,
  PlusButton,
  InfoWrapper,
  TestContainer,
  TestingContainer
} from './styles';

export default function Testing(): React.ReactElement {
  const [opened, setOpened] = React.useState({});

  function onClick(index: number): void {
    const newOpened = { ...opened };
    if (newOpened[index]) delete newOpened[index];
    else newOpened[index] = true;
    setOpened(newOpened);
  }

  function getClassName(idx: number): string {
    let CN = 'InfoWrapper';
    if (opened[idx]) CN += ' opened';
    return CN;
  }

  return (
    <TestingContainer className="Testing">
      {TEST.map((test, idx) => (
        <TestContainer key={test.key} onClick={() => onClick(idx)} className="Test">
          <TestNumber>{idx + 1}</TestNumber>

          <TestInfo>
            <TestTitle>{test.title}</TestTitle>

            <InfoWrapper className={getClassName(idx)}>
              <TestText>{test.text}</TestText>
              {test.link ? <TestLink onClick={GenerateEvent}>{test.link}</TestLink> : null}
            </InfoWrapper>
          </TestInfo>

          <PlusButton>+</PlusButton>

          <svg
            width="15"
            height="8"
            fill="none"
            viewBox="0 0 15 8"
            className="arrayNext"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L7.80952 6L14 1" stroke="#C0BDAE" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </TestContainer>
      ))}
    </TestingContainer>
  );
}
