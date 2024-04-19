import * as React from 'react';

import Button from '@components/Button';
import { CONTAINER_IDS } from '@consts';
import ArrowIncircle from '@svg/ArrowInCircle';
import CustomArrow from '@svg/CustomArrow';
import CustomLine from '@svg/CustomLine';
import DotedCircle from '@svg/DotedCircle';
import PinkCircle from '@svg/PinkCircle';
import PinkLines from '@svg/PinkLines';
import { GenerateEvent } from '@utils';

import {
  Img,
  Text,
  Title,
  LinkTitle,
  CustomLink,
  ContentWrapper,
  TitleContainer,
  AboutUsBlockContainer
} from './styles';

export default function AboutUsBlock(): React.ReactElement {
  return (
    <AboutUsBlockContainer className="AboutUsBlock" id={CONTAINER_IDS.aboutUs}>
      <DotedCircle color="green" />
      <PinkLines />
      <PinkCircle />
      <CustomArrow type="Blue" />
      <Img src="/assets/MobilePhone.png" />

      <ContentWrapper>
        <TitleContainer>
          <CustomLine type={2} />
          <Title>
            {`Мы эксперты и методисты
в области преподавания
английского языка`}
          </Title>
        </TitleContainer>

        <Text className="text1">
          {`Мы уверены, что наш метод языковой практики более простой
и быстрый. Нашей целью является помочь вам избежать чрезмерной зависимости
от репетиторов по достижению уровня Intermediate или выше.`}
        </Text>

        <Text className="text2">
          {`С нами вам удастся преобразовать пассивные знания\n с изученной лексикой и грамматикой в свободную речь`}
        </Text>

        <CustomLink onClick={GenerateEvent}>
          <LinkTitle>{`Хочу начать\nговорить`}</LinkTitle>
          <ArrowIncircle />
        </CustomLink>
      </ContentWrapper>

      <Button />
    </AboutUsBlockContainer>
  );
}
