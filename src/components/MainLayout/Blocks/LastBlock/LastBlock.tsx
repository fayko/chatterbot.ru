import * as React from 'react';

import ArrowIncircle from '@svg/ArrowInCircle';
import CustomArrow from '@svg/CustomArrow';
import CustomLine from '@svg/CustomLine';
import DotedCircle from '@svg/DotedCircle';
import GreenTrapezoid from '@svg/GreenTrapezoid';
import PinkLines from '@svg/PinkLines';
import YellowTrapezoid from '@svg/YellowTrapezoid';
import { GenerateEvent } from '@utils';

import { LastBlockContainer, CustomLink } from './styles';

export default function LastBlock(): React.ReactElement {
  return (
    <LastBlockContainer className="LastBlock">
      <CustomArrow type="Pink" />
      <DotedCircle color="grey" />
      <CustomLine type={6} />
      <YellowTrapezoid />
      <GreenTrapezoid />
      <PinkLines />
      <PinkLines />

      <CustomLink onClick={GenerateEvent}>
        <ArrowIncircle />
        {`ХоЧУ начать\nговорить!`}
      </CustomLink>
    </LastBlockContainer>
  );
}
