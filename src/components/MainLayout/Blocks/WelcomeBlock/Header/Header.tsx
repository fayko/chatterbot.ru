import * as React from 'react';

import LinksMap from '@components/LinksMap';
import ChatterLogo from '@svg/ChatterLogo';
import Close from '@svg/Close';
import MobileMenu from '@svg/MobileMenu';
import TelegramLogo from '@svg/TelegramLogo';

import {
  CloseWrapper,
  TelegrammBlock,
  SubscribeButton,
  HeaderContainer,
  MobileModalMenu
} from './styles';

export default function Header(): React.ReactElement {
  const [opened, setOpened] = React.useState(false);

  function getClassName(): string {
    let CN = 'MobileModalMenu';
    if (!opened) CN += ' hidden';
    return CN;
  }

  return (
    <HeaderContainer className="Header">
      <ChatterLogo />

      <LinksMap />

      <TelegrammBlock>
        <TelegramLogo />
        <SubscribeButton>Подписывайся на новости</SubscribeButton>
      </TelegrammBlock>

      {/* Mobile */}
      <MobileMenu onClick={() => setOpened(true)} />

      <MobileModalMenu className={getClassName()}>
        <HeaderContainer>
          <ChatterLogo />
          <CloseWrapper onClick={() => setOpened(false)}>
            <Close />
          </CloseWrapper>
        </HeaderContainer>

        <LinksMap onClick={() => setOpened(false)} />
      </MobileModalMenu>
    </HeaderContainer>
  );
}
