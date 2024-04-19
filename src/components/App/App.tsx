import * as React from 'react';

import MainLayout from '@components/MainLayout';

import { AppContainer, GlobalStyles } from './styles';

export default function App(): React.ReactElement {
  return (
    <AppContainer className="App">
      <GlobalStyles />
      <MainLayout />
    </AppContainer>
  );
}
