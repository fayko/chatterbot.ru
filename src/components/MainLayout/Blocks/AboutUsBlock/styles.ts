import styled from 'styled-components';

export const AboutUsBlockContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: visible;
  padding: 25vh 0 10vh 0;
  box-sizing: border-box;

  & {
    & > svg {
      position: absolute;
    }

    & > svg.DotedCircleGreen {
      top: -5%;
      left: -8%;
      zoom: 3;
    }

    & > svg.PinkLines {
      top: 12%;
      left: 45%;
    }

    & > svg.CustomArrowBlue {
      top: 76%;
      left: 80%;
      zoom: 0.8;
    }

    & > svg.PinkCircle {
      top: 84%;
      left: 77%;
      zoom: 0.6;
    }
  }

  @media screen and (max-width: 1100px) {
    padding: 60px 30px 100px 30px;

    & > svg.DotedCircleGreen {
      zoom: 2.5;
    }

    & > svg.CustomArrowBlue {
      zoom: 0.5;
    }

    & > svg.PinkLines {
      display: none;
    }

    & > svg.PinkCircle {
      display: none;
    }
  }

  @media screen and (max-width: 900px) {
    padding: 80px 30px 80px 30px;

    & > svg.DotedCircleGreen {
      zoom: 2.5;
    }

    & > svg.CustomArrowBlue {
      zoom: 0.5;
    }

    & > svg.PinkLines {
      display: none;
    }

    & > svg.PinkCircle {
      display: none;
    }
  }

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 0;

    & > svg {
      display: none;
    }
  }
`;

export const Img = styled.img`
  position: absolute;
  top: 10vh;
  left: 8vw;
  zoom: 0.75;
  max-height: 90%;

  @media screen and (max-width: 1100px) {
    zoom: 0.6;
    top: 100px;
  }

  @media screen and (max-width: 900px) {
    zoom: 0.55;
    top: 100px;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  margin: 0 0 0 45%;

  @media screen and (max-width: 480px) {
    margin: 0;
    padding: 15px;
  }
`;

export const TitleContainer = styled.div`
  position: relative;
  font-size: 48px;
  white-space: pre-wrap;
  font-weight: 500;
  color: #000;

  & > svg.CustomLine2 {
    position: absolute;
    scale: 0.78;
    transform-origin: 0 0;
  }

  @media screen and (max-width: 1100px) {
    font-size: 40px;

    & > svg.CustomLine2 {
      zoom: 0.7;
    }
  }

  @media screen and (max-width: 900px) {
    font-size: 32px;

    & > svg.CustomLine2 {
      zoom: 0.6;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
    text-align: center;
    white-space: initial;

    & > svg.CustomLine2 {
      position: absolute;
      left: 0;
      scale: 0.5;
      transform-origin: 0 0;
    }
  }
`;

export const Title = styled.div`
  position: relative;
  line-height: 120%;
`;

export const Text = styled.div`
  position: relative;
  color: #000;
  font-size: 20px;
  font-weight: 400;
  white-space: pre-wrap;

  @media screen and (max-width: 900px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
    line-height: 130%;
    text-align: center;
    white-space: normal;
    margin: 30px 0 0 0;

    &.text1 {
      margin: 20px 10px 0 10px;
    }

    &.text2 {
      white-space: normal;
      padding: 0 20px;
      margin: 20px 0 0 0;
    }
  }
`;

export const CustomLink = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 30px 0 0 0;
  cursor: pointer;

  & > svg.ArrowIncircle {
    zoom: 0.5;
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
    zoom: 0.7;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const LinkTitle = styled.div`
  margin: 0 30px 0 0;
  color: #000;
  font-size: 30px;
  white-space: pre-wrap;
  text-decoration-line: underline;
`;
