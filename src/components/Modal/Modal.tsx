import * as React from 'react';

import { LANGUAGES } from '@consts';
import Close from '@svg/Close';

import { ModalContainer, ContentContainer, Img, Title, Button, Text, Substrate } from './styles';

export default function Modal(): React.ReactElement {
  const modalRef = React.useRef(null);
  const [opened, setOpened] = React.useState(false);
  const [selected, setSelected] = React.useState(null);

  function getHeader(): React.ReactElement {
    if (!selected) return <Img src="/assets/PopUp_Header.svg" />;
    return null;
  }

  function getContent(): React.ReactElement {
    if (!selected)
      return (
        <ContentContainer className="stage1">
          <Title>{`Выбери язык, который\nхочешь практиковать!`}</Title>
          {LANGUAGES.map(lang => (
            <Button
              key={lang.key}
              onClick={() => setSelected(lang.key)}
              className={selected === lang.key ? 'highlighted' : ''}
            >
              {lang.title}
            </Button>
          ))}
        </ContentContainer>
      );

    if (selected === 'english')
      return (
        <ContentContainer className="stage2">
          <Title>Ура! Язык выбран!</Title>
          <Text>Проверим твой уровень знания языка?</Text>
          <Button
            className="highlighted"
            onClick={() => {
              window.location.href = 'https://t.me/english_chatter_bot';
            }}
          >
            Пройти тест
          </Button>
        </ContentContainer>
      );

    return (
      <ContentContainer className="stage2">
        <Title>Ура! Язык выбран!</Title>
        <Text>
          Бот под этот язык находится в разработке. Но совсем скоро он будет доступен для вас!
        </Text>
      </ContentContainer>
    );
  }

  React.useEffect(() => {
    if (!opened) setSelected(null);

    const options = { capture: true };
    const handler = event => {
      if (!modalRef?.current?.contains(event.target)) {
        event.stopPropagation();
        event.stopImmediatePropagation();
      }
    };

    if (opened) document.addEventListener('click', handler, options);

    return () => document.removeEventListener('click', handler, options);
  }, [opened]);

  React.useEffect(() => {
    const callback = (): void => setOpened(true);
    document.addEventListener('open_popup', callback);

    return () => document.removeEventListener('open_popup', callback);
  }, []);

  if (!opened) return null;

  return (
    <>
      <Substrate />
      <ModalContainer className="Modal" ref={modalRef}>
        <Close onClick={() => setOpened(false)} />
        {getHeader()}
        {getContent()}
      </ModalContainer>
    </>
    
  );
}
