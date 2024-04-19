import * as React from 'react';

import { CONTAINER_IDS } from '@consts';
import { getDocument } from '@utils';

import { LinksMapContainer, CustomLink } from './styles';

interface IProps {
  onClick?: () => void;
}

export default function LinksMap(props: IProps): React.ReactElement {
  const { onClick: onClickUp = () => null } = props;

  function onClick(id: string): void {
    onClickUp();
    let elem;
    getDocument(() => {
      elem = document?.getElementById(id);
    });
    if (!elem) return;
    elem.scrollIntoView();
  }

  return (
    <LinksMapContainer className="LinksMap">
      <CustomLink onClick={() => onClick(CONTAINER_IDS.advantages)}>Преимущества</CustomLink>
      <CustomLink onClick={() => onClick(CONTAINER_IDS.aboutUs)}>О нас</CustomLink>
      <CustomLink onClick={() => onClick(CONTAINER_IDS.howItWorks)}>Как это работает</CustomLink>
      <CustomLink onClick={() => onClick(CONTAINER_IDS.prices)}>Тарифы и оплата</CustomLink>
      <CustomLink onClick={() => onClick(CONTAINER_IDS.languages)}>Языки</CustomLink>
    </LinksMapContainer>
  );
}
