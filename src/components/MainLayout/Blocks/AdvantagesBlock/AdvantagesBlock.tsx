import * as React from 'react';

import { CONTAINER_IDS } from '@consts';
import BlueLines from '@svg/BlueLines';
import CustomArrow from '@svg/CustomArrow';
import CustomLine from '@svg/CustomLine';
import GreenTrapezoid from '@svg/GreenTrapezoid';
import YellowTrapezoid from '@svg/YellowTrapezoid';

import Message from './Message';
import { Title, TitleContainer, MessagesContainer, AdvantagesBlockContainer } from './styles';

export default function AdvantagesBlock(): React.ReactElement {
  return (
    <AdvantagesBlockContainer className="AdvantagesBlock" id={CONTAINER_IDS.advantages}>
      <CustomArrow type="Pink" />
      <BlueLines />
      <YellowTrapezoid />
      <GreenTrapezoid />

      <TitleContainer>
        <CustomLine type={1} />
        <Title>Что вы получите?</Title>
      </TitleContainer>

      <MessagesContainer className="MessagesContainer">
        <Message corner="left" type="uniqueEnv" />
        <Message corner="right" type="fastProgress" />
        <Message corner="left" type="oneYear" />
      </MessagesContainer>
    </AdvantagesBlockContainer>
  );
}
