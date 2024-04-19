import * as React from 'react';

import Button from '@components/Button';
import { CONTAINER_IDS } from '@consts';
import ArrowIncircle from '@svg/ArrowInCircle';
import BlueLines from '@svg/BlueLines';
import CustomArrow from '@svg/CustomArrow';
import CustomLine from '@svg/CustomLine';
import DotedCircle from '@svg/DotedCircle';
import FourLines from '@svg/FourLines';
import PinkLines from '@svg/PinkLines';
import { GenerateEvent } from '@utils';

import {
  Title,
  Message,
  Wrapper,
  LinkTitle,
  CustomLink,
  TitleContainer,
  LanguagesBlockContainer
} from './styles';

export default function LanguagesBlock(): React.ReactElement {
  return (
    <LanguagesBlockContainer className="LanguagesBlock" id={CONTAINER_IDS.languages}>
      <CustomArrow type="Pink" />
      <PinkLines />
      <BlueLines />
      <DotedCircle color="yellow" />
      <DotedCircle color="green" />
      <FourLines color="green" rotateDeg={90} />

      <Wrapper>
        <TitleContainer>
          <CustomLine type={2} />
          <Title>{`Мы не ограничиваемся\nодним английским!`}</Title>
        </TitleContainer>

        <Message>Выбери язык, который ты знаешь на уровне Intermediate</Message>

        <CustomLink onClick={GenerateEvent}>
          <LinkTitle>Выбрать прямо сейчас!</LinkTitle>
          <ArrowIncircle />
        </CustomLink>

        <Button type={2} />
      </Wrapper>
    </LanguagesBlockContainer>
  );
}
