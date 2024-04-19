import * as React from 'react';

import Button from '@components/Button';
import { CONTAINER_IDS } from '@consts';
import CustomLine from '@svg/CustomLine';
import GreenCircle from '@svg/GreenCircle';
import Group from '@svg/Group';
import PinkCircle from '@svg/PinkCircle';
import PinkLines from '@svg/PinkLines';
import PinkTriangle from '@svg/PinkTriangle';
import TwoCircles from '@svg/TwoCircles';

import {
  Title,
  SvgContainer,
  TitleContainer,
  TestingWrapper,
  LeftPartContainer,
  HowItWorksBlockContainer
} from './styles';
import Testing from './Testing';

export default function HowItWorksBlock(): React.ReactElement {
  return (
    <HowItWorksBlockContainer className="HowItWorksBlock" id={CONTAINER_IDS.howItWorks}>
      <SvgContainer>
        <PinkLines />
        <PinkLines />
        <PinkCircle />
        <PinkTriangle />
        <GreenCircle />
        <Group type="type1" />
      </SvgContainer>

      <LeftPartContainer>
        <TitleContainer>
          <CustomLine type={3} />
          <CustomLine type={2} />
          <Title>{`Как мы\nработаем?`}</Title>
        </TitleContainer>
        <TwoCircles />
      </LeftPartContainer>

      <TestingWrapper>
        <Testing />
      </TestingWrapper>

      <Button />
    </HowItWorksBlockContainer>
  );
}
