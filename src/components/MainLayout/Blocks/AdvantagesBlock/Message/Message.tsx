import * as React from 'react';

import { TITLES, MESSAGE } from './consts';
import { MESSAGE_CLASSES, MessageContainer, MessageTitle, MessageText } from './styles';

interface IProps {
  corner: 'right' | 'left';
  type: keyof typeof MESSAGE_CLASSES;
}

export default function Message(props: IProps): React.ReactElement {
  const { type, corner } = props;

  function getClassName(): string {
    let CN = 'Message';
    CN += ` ${MESSAGE_CLASSES[type]}`;
    return CN;
  }

  function getTitle(): string {
    return TITLES[type];
  }

  function getMessage(): string {
    return MESSAGE[type];
  }

  return (
    // <MessageContainer className={getClassName()} corner={corner}>
    <MessageContainer className={getClassName()}>
      <MessageTitle>{getTitle()}</MessageTitle>
      <MessageText>{getMessage()}</MessageText>
    </MessageContainer>
  );
}
