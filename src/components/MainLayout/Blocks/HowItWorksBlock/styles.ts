import styled from 'styled-components';

export const HowItWorksBlockContainer = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  height: auto;
  padding: 1% 6% 30px 6%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    margin: 30px 0 0 0;
    display: flex;
    flex-direction: column;
    background-color: #f9f6ea;
  }
`;

export const LeftPartContainer = styled.div`
  & > svg.TwoCircles {
    zoom: 0.5;
  }

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 20px;

    & > svg.TwoCircles {
      display: none;
    }
  }
`;

export const TitleContainer = styled.div`
  display: inline-block;
  position: relative;
  margin: 20px 20px 60px 3%;

  & > svg.CustomLine3 {
    position: absolute;
    zoom: 0.8;
  }

  & > svg.CustomLine2 {
    display: none;
  }

  @media screen and (max-width: 900px) {
    zoom: 0.7;
  }

  @media screen and (max-width: 480px) {
    & > svg.CustomLine3 {
      display: none;
    }

    & > svg.CustomLine2 {
      display: block;
      position: absolute;
      zoom: 0.35;
      transform: rotate(180deg);
      top: 30%;
    }
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
    white-space: nowrap;
  }
`;

export const TestingWrapper = styled.div`
  position: relative;
  width: 60%;

  @media screen and (max-width: 900px) {
    width: 70%;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const SvgContainer = styled.div`
  display: none;

  @media screen and (max-width: 480px) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    & > svg {
      position: absolute;
    }

    & > svg.PinkLines:first-child {
      top: 76%;
      left: 0;
      transform: rotate(90deg);
      zoom: 0.65;
    }

    & > svg.PinkLines:nth-child(2) {
      top: 6%;
      left: 0;
      transform: rotate(90deg);
      zoom: 0.65;
    }

    & > svg.GreenCircle {
      top: 25%;
      left: 92%;
    }

    & > svg.PinkTriangle {
      top: 40%;
      left: 6%;
      zoom: 0.35;
    }

    & > svg.PinkCircle {
      top: 39%;
      left: 14%;
      zoom: 0.3;
    }

    & > svg.Group.type1 {
      top: 55%;
      left: 76%;
      zoom: 0.8;
    }
  }
`;
