import styled from 'styled-components';

export const FooterBlockContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 10%;
  min-height: 120px;
  background-color: #e3e3ff;
  padding: 0 80px;
  box-sizing: border-box;

  & > svg.TelegramLogo {
    display: none;
  }

  @media screen and (max-width: 900px) {
    padding: 0 30px;
  }

  @media screen and (max-width: 480px) {
    height: auto;
    padding: 15px 15px 30px 15px;

    & > svg.TelegramLogo {
      display: block;
      position: absolute;
      top: 40px;
      zoom: 0.8;
      right: 30px;
    }
  }
`;

export const FlexBlock = styled.div`
  position: relative;
  width: 100%;
  margin: 10px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:last-child {
    margin: 10px 0 10px 0;
  }

  & > svg {
    margin: 0 30px 0 0;
  }

  @media screen and (max-width: 900px) {
    & > svg {
      max-width: 120px;
    }
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;

    & > svg {
      margin: 0;
      width: 150px;
      align-self: flex-start;
    }

    & > div.LinksMap {
      margin: 10px 0 0 0;
      gap: 10px;
      flex-wrap: wrap;
      width: 100%;
      flex-direction: row;

      & > div {
        zoom: 1;
        min-width: 40%;
        font-size: 14px;
        text-align: start;
        font-weight: 500;
      }
    }
  }
`;

export const Rights = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin: 0 20px 0 0;

  @media screen and (max-width: 900px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    align-self: flex-start;
    font-size: 12px;
    font-weight: 300;
  }
`;

export const Design = styled.div`
  font-size: 16px;
  font-weight: 500;

  @media screen and (max-width: 900px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    align-self: flex-end;
    font-weight: 300;
    font-size: 12px;
  }
`;

export const Politica = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin: 0 20px 0 0;

  @media screen and (max-width: 900px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    align-self: flex-start;
    font-size: 12px;
    font-weight: 300;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  @media screen and (max-width: 480px) {
    width: 100%;
    justify-content: space-between;
  }
`;
