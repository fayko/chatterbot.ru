import styled from 'styled-components';

export const PricesBlockContainer = styled.div`
  position: relative;
  padding: 10vh 0;
  box-sizing: border-box;

  @media screen and (max-width: 900px) {
    padding: 50px 0;
  }

  @media screen and (max-width: 480px) {
    padding: 30px 0;
  }
`;

export const Price = styled.div`
  flex-grow: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 80px;
  font-weight: 400;

  @media screen and (max-width: 900px) {
    font-size: 50px;
  }

  @media screen and (max-width: 480px) {
    font-size: 50px;
  }
`;

export const Title = styled.div`
  position: relative;
  font-size: 48px;
  font-weight: 500;
  color: #000;
  white-space: pre-wrap;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Button = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  bottom: 0;
  height: 60px;
  min-height: 60px;
  border-radius: 30px;
  border: solid 1px #000;
  cursor: pointer;
  user-select: none;
  color: #000;
  font-size: 18px;
  font-weight: 500;

  &:hover {
    color: #fff;
    background-color: #7270ff;
    border: solid 1px transparent;
  }

  @media screen and (max-width: 900px) {
    zoom: 0.7;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const PriceBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 2% 0 0;
  width: 400px;
  height: 400px;
  border-radius: 10%;
  background-color: #f9f6ea;
  padding: 25px;
  box-sizing: border-box;
  overflow: hidden;

  &:last-child {
    margin: 0 0 0 0;
  }

  @media screen and (max-width: 900px) {
    width: 340px;
    height: 340px;
    padding: 30px 20px;
  }

  @media screen and (max-width: 480px) {
    margin: 0;
    width: 80vw;
    height: 80vw;
    padding: 30px 20px;
  }
`;

export const PriceTitle = styled.div`
  text-align: center;
  color: #000;
  font-size: 32px;
  font-weight: 400;

  @media screen and (max-width: 900px) {
    font-size: 25px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const TitleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 8vh 0;

  & > svg.CustomLine5 {
    position: absolute;
    top: 35px;
    zoom: 0.8;
  }

  @media screen and (max-width: 900px) {
    zoom: 0.8;
    margin: 0 0 50px 0;
  }

  @media screen and (max-width: 480px) {
    & > svg.CustomLine5 {
      top: 0px;
      zoom: 0.7;
    }
  }
`;

export const PricesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const PriceDescription = styled.div`
  flex-grow: 2;
  text-align: center;
  color: #000;
  font-size: 20px;
  font-weight: 300;
  white-space: pre-wrap;

  @media screen and (max-width: 900px) {
    font-size: 16;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
