import * as React from 'react';

import Button from '@components/Button';
import ArrowIncircle from '@svg/ArrowInCircle';
import CustomLine from '@svg/CustomLine';
import Group from '@svg/Group';
import PinkLines from '@svg/PinkLines';
import { GenerateEvent } from '@utils';

import {
  MainTitle,
  LinkTitle,
  CustomLink,
  Description,
  FlexContainer,
  ContactsBlockContainer
} from './styles';

export default function ContactsBlock(): React.ReactElement {
  return (
    <ContactsBlockContainer className="ContactsBlock">
      <PinkLines />
      <CustomLine type={4} />
      <Group type="type1" />

      <MainTitle>
        {`Контакты, которые вы устанавливаете через Chatter,
могут стать вашими долгосрочными партнерами
для практики разговорного английского.`}
      </MainTitle>

      <FlexContainer>
        <CustomLink onClick={GenerateEvent}>
          <LinkTitle>{`Хочу начать\nговорить`}</LinkTitle>
          <ArrowIncircle />
        </CustomLink>

        <Description>
          {`Мы понимаем, что, если вы достигли уровня Intermediate и выше, каждый из
вас представляет из себя интересного, разностороннего собеседника.
Вы сможете продолжать общаться и развиваться вместе, создавая полезные
связи и поддерживая мотивацию.`}
        </Description>
      </FlexContainer>

      <Button />
    </ContactsBlockContainer>
  );
}
