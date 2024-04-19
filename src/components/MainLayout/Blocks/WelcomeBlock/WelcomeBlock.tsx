import * as React from 'react';

import Button from '@components/Button';
import ArrowIncircle from '@svg/ArrowInCircle';
import BlueLines from '@svg/BlueLines';
import DotedCircle from '@svg/DotedCircle';
import GreenTrapezoid from '@svg/GreenTrapezoid';
import PinkCircle from '@svg/PinkCircle';
import PinkLines from '@svg/PinkLines';
import PinkTriangle from '@svg/PinkTriangle';
import TelegramLogo from '@svg/TelegramLogo';
import YellowTrapezoid from '@svg/YellowTrapezoid';
import { GenerateEvent, getScreenWidth } from '@utils';

import Header from './Header';
import { WelcomeBlockContainer, WelcomeTitle, Text, TestLink, Wrapper } from './styles';

export default function WelcomeBlock(): React.ReactElement {
  function onClick(): void {
    GenerateEvent();
  }

  function getWelcomeTitle(): string {
    const screenWidth = getScreenWidth();
    if (!screenWidth || screenWidth > 480) return `Привет,\nя – CHATTER BoT!`;
    return `Привет,\nя – CHATTER\nBoT!`;
  }

  return (
    <WelcomeBlockContainer className="WelcomeBlock">
      <PinkCircle />
      <PinkTriangle />
      <DotedCircle color="yellow" />
      <TelegramLogo color="pink" />

      <YellowTrapezoid />
      <GreenTrapezoid />
      <PinkLines />

      <Header />
      <WelcomeTitle>{getWelcomeTitle()}</WelcomeTitle>
      <Text className="free">ГОВОРИ СВОБОДНО!</Text>
      <Wrapper>
        <Text className="your-level">
          {`Твой уровень знания языка intermediate и выше?
Хочешь развить разговорный или бизнес-английский?
Я здесь, чтобы помочь тебе в этом!`}
        </Text>
      </Wrapper>
      <BlueLines />

      <TestLink onClick={onClick}>
        {`Пройти тест\nпрямо сейчас!`}
        <ArrowIncircle />
      </TestLink>

      <Button />
    </WelcomeBlockContainer>
  );
}
