import * as React from 'react';

import LinksMap from '@components/LinksMap';
import ChatterLogo from '@svg/ChatterLogo';
import TelegramLogo from '@svg/TelegramLogo';

import { FooterBlockContainer, FlexBlock, Rights, Design, Politica, Container } from './styles';

export default function FooterBlock(): React.ReactElement {
  return (
    <FooterBlockContainer className="FooterBlock">
      <FlexBlock>
        <ChatterLogo />
        <LinksMap />
      </FlexBlock>

      <FlexBlock>
        <Rights>©2023, Chatter. All rights reserved.</Rights>
        <Container>
          <Politica>Политика обработки данных</Politica>
          <Design>Design: DDYAGEL</Design>
        </Container>
      </FlexBlock>

      <TelegramLogo color="green" />
    </FooterBlockContainer>
  );
}
