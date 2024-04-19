import * as React from 'react';

import ButtonMob from '@components/Button';
import { CONTAINER_IDS } from '@consts';
import CustomLine from '@svg/CustomLine';
import { GenerateEvent } from '@utils';

import {
  Price,
  Title,
  Button,
  PriceBlock,
  PriceTitle,
  TitleContainer,
  PricesContainer,
  PriceDescription,
  PricesBlockContainer
} from './styles';

export default function PricesBlock(): React.ReactElement {
  function getButton(): React.ReactElement {
    return (
      <>
        <Button onClick={GenerateEvent}>Выбрать и пройти тест!</Button>
        <ButtonMob title="Выбрать и пройти тест" />
      </>
    );
  }

  return (
    <PricesBlockContainer className="PricesBlock" id={CONTAINER_IDS.prices}>
      <TitleContainer>
        <CustomLine type={5} />
        <Title>Тарифы</Title>
      </TitleContainer>

      <PricesContainer>
        <PriceBlock>
          <PriceTitle>НАЧАТЬ ГОВОРИТЬ</PriceTitle>
          <Price>5000 р.</Price>
          <PriceDescription>{`4 месяца практики\n16-18 собеседников`}</PriceDescription>
          {getButton()}
        </PriceBlock>

        <PriceBlock>
          <PriceTitle>ГОВОРИТЬ УВЕРЕННО</PriceTitle>
          <Price>7000 р.</Price>
          <PriceDescription>{`12 месяцев практики\n52-53 собеседника`}</PriceDescription>
          {getButton()}
        </PriceBlock>
      </PricesContainer>
    </PricesBlockContainer>
  );
}
