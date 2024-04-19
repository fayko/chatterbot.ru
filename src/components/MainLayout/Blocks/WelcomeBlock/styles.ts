import styled from 'styled-components';

export const WelcomeBlockContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 5vh 100px 10vh 100px;
  box-sizing: border-box;
  background: linear-gradient(180deg, #f8f5e9 0%, #fff 100%);

  & {
    & > svg {
      position: absolute;
      zoom: 0.9;
    }

    & > svg.DotedCircleYellow {
      top: 20%;
      left: 42%;
    }

    & > svg.PinkCircle {
      top: 12%;
      left: 84%;
    }

    & > svg.PinkTriangle {
      top: 18%;
      left: 80%;
    }

    & > svg.PinkLines {
      top: 80%;
      left: 82%;
    }

    & > svg.BlueLines {
      position: relative;
      margin: 50px 0 0 0;
      left: 40%;
    }

    & > svg.GreenTrapezoid {
      top: 90%;
      left: 81%;
    }

    & > svg.YellowTrapezoid {
      top: 82%;
      left: 75%;
    }

    & > svg.TelegramLogo {
      display: none;
    }
  }

  @media screen and (max-width: 1400px) {
    padding: 3vh 50px 6vh 50px;

    & > svg {
      zoom: 0.8;
    }
  }

  @media screen and (max-width: 1130px) {
    & > svg {
      zoom: 0.7;
    }

    & > svg.PinkCircle {
      zoom: 0.4;
      top: 15%;
    }

    & > svg.PinkTriangle {
      top: 22%;
      left: 80%;
      zoom: 0.5;
    }
  }

  @media screen and (max-width: 900px) {
    padding: 30px 15px 50px 15px;

    & > svg {
      zoom: 0.6;
    }

    & > svg.PinkCircle {
      zoom: 0.35;
      top: 17%;
    }

    & > svg.PinkTriangle {
      top: 22%;
      left: 80%;
      zoom: 0.5;
    }

    & > svg.DotedCircleYellow {
      top: 20%;
      left: 42%;
      zoom: 0.6;
    }
  }

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    padding: 5% 7% 20% 7%;

    & > svg.BlueLines {
      display: none;
    }

    & > svg.PinkCircle {
      top: 15%;
      left: 15%;
    }

    & > svg.PinkTriangle {
      top: 20%;
      left: 5%;
      zoom: 0.4;
    }

    & > svg.DotedCircleYellow {
      top: 16%;
      left: 80%;
    }

    & > svg.PinkLines {
      top: 94%;
      left: 82%;
      zoom: 0.5;
    }

    & > svg.GreenTrapezoid {
      top: 100%;
      left: 84%;
    }

    & > svg.YellowTrapezoid {
      zoom: 0.5;
      top: 95%;
      left: 72%;
    }

    & > svg.TelegramLogo {
      display: block;
      zoom: 0.8;
      top: 95%;
      left: 10%;
    }
  }
`;

export const WelcomeTitle = styled.div`
  position: relative;
  font-size: 120px;
  font-family: Catallina;
  white-space: pre-wrap;
  text-transform: lowercase;
  margin: 8% 0 0 0;

  @media screen and (max-width: 1400px) {
    font-size: 105px;
  }

  @media screen and (max-width: 1130px) {
    font-size: 80px;
  }

  @media screen and (max-width: 900px) {
    font-size: 60px;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    font-size: 50px;
    line-height: 55px;
    margin: 35% 0 0 0;
    text-align: center;
  }
`;

export const Text = styled.div`
  color: #000;
  font-weight: 400;
  font-style: normal;
  font-family: Raleway;

  &.free {
    margin: 10px 0 0 0;
    font-size: 48px;

    @media screen and (max-width: 1400px) {
      font-size: 42px;
    }

    @media screen and (max-width: 1130px) {
      font-size: 38px;
    }

    @media screen and (max-width: 900px) {
      font-size: 34px;
    }

    @media screen and (max-width: 480px) {
      margin: 0;
      width: fit-content;
      align-self: center;
      font-size: 28px;
      text-align: center;
      padding: 10px 15px;
      border-radius: 10px;
      color: #000;
      font-weight: 500;
    }
  }

  &.your-level {
    position: relative;
    right: 0;
    width: fit-content;
    margin: 20px 0 0 0;
    font-size: 32px;
    white-space: pre-wrap;

    @media screen and (max-width: 1400px) {
      font-size: 28px;
    }

    @media screen and (max-width: 1130px) {
      font-size: 24px;
    }

    @media screen and (max-width: 900px) {
      font-size: 20px;
    }

    @media screen and (max-width: 480px) {
      font-size: 16px;
      line-height: 21px;
      text-align: center;
      margin: 20px 0 40px 0;
      white-space: normal;
    }
  }
`;

export const TestLink = styled.div`
  position: absolute;
  bottom: 2%;
  left: 6%;
  font-family: Raleway;
  font-size: 40px;
  font-style: normal;
  font-weight: 300;
  color: #000;
  text-decoration-line: underline;
  white-space: pre-wrap;
  cursor: pointer;

  & > svg.ArrowIncircle {
    position: absolute;
    zoom: 0.7;
    bottom: 20%;
    left: 100%;
    transform: rotate(45deg);
  }

  &:hover {
    color: #7270ff;

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

  @media screen and (max-width: 1400px) {
    zoom: 0.8;
  }

  @media screen and (max-width: 1130px) {
    zoom: 0.6;
  }

  @media screen and (max-width: 900px) {
    zoom: 0.5;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
