import * as React from 'react';

import Modal from '@components/Modal';

import AboutUsBlock from './Blocks/AboutUsBlock';
import AdvantagesBlock from './Blocks/AdvantagesBlock';
import ContactsBlock from './Blocks/ContactsBlock';
import FooterBlock from './Blocks/FooterBlock';
import HowItWorksBlock from './Blocks/HowItWorksBlock';
import LanguagesBlock from './Blocks/LanguagesBlock';
import LastBlock from './Blocks/LastBlock';
import PricesBLock from './Blocks/PricesBlock';
import WelcomeBlock from './Blocks/WelcomeBlock';
import { MainLayoutContainer } from './styles';

export default function MainLayout(): React.ReactElement {
  return (
    <MainLayoutContainer className="MainLayout">
      <WelcomeBlock />
      <AdvantagesBlock />
      <AboutUsBlock />
      <HowItWorksBlock />
      <ContactsBlock />
      <PricesBLock />
      <LanguagesBlock />
      <LastBlock />
      <FooterBlock />

      <Modal />
    </MainLayoutContainer>
  );
}
