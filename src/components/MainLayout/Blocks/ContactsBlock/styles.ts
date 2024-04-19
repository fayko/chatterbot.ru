import styled from 'styled-components';

export const ContactsBlockContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: visible;
  background-color: #f9f6ea;
  padding: 8vh 10% 6vh 5%;
  box-sizing: border-box;

  & > svg {
    position: absolute;
  }

  & > svg.PinkLines {
    top: 95%;
    left: 80%;
  }

  & > svg.CustomLine4 {
    top: 10%;
    transform: translate(30%, 0px);
    right: 0;
    zoom: 2;
  }

  & > svg.Group {
    display: none;
  }

  @media screen and (max-width: 900px) {
    & > svg.CustomLine4 {
      zoom: 0.8;
    }
  }

  @media screen and (max-width: 480px) {
    background-color: #fff;
    padding: 8vh 10% 6vh 10%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > svg.PinkLines {
      display: none;
    }

    & > svg.CustomLine4 {
      display: none;
    }

    & > svg.Group {
      display: block;
    }
  }
`;

export const FlexContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 30px 0 0 0;

  @media screen and (max-width: 480px) {
    flex-direction: column-reverse;
    align-items: center;
    margin: 40px 0 50px 0;
  }
`;

export const MainTitle = styled.div`
  position: relative;
  font-size: 40px;
  white-space: pre-wrap;
  font-weight: 500;
  line-height: 120%;

  @media screen and (max-width: 1240px) {
    font-size: 34px;
    white-space: normal;
  }

  @media screen and (max-width: 900px) {
    font-size: 32px;
    white-space: normal;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
    white-space: normal;
    text-align: center;
    margin: 140px 0 0 0;
  }
`;

export const CustomLink = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 30px 30px 0 0;
  cursor: pointer;

  & > svg.ArrowIncircle {
    zoom: 0.4;
    overflow: visible;
    transform: rotate(45deg);
  }

  &:hover {
    & > div {
      color: #7270ff;
    }

    & > svg {
      circle {
        fill: #7270ff;
        stroke: none;
      }

      path {
        fill: #fff;
      }
    }
  }

  @media screen and (max-width: 900px) {
    zoom: 0.8;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const LinkTitle = styled.div`
  margin: 0 30px 0 0;
  color: #000;
  font-size: 26px;
  white-space: pre-wrap;
  text-decoration-line: underline;
`;

export const Description = styled.div`
  color: #000;
  font-size: 20px;
  font-weight: 400;
  white-space: pre-wrap;
  line-height: 120%;

  @media screen and (max-width: 900px) {
    font-size: 18px;
    white-space: normal;
  }

  @media screen and (max-width: 480px) {
    white-space: normal;
    text-align: center;
    font-size: 16px;
  }
`;
