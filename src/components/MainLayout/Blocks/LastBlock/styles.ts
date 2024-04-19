import styled from 'styled-components';

export const LastBlockContainer = styled.div`
  position: relative;
  height: 60vh;
  min-height: 400px;
  max-height: 600px;
  width: 100%;
  overflow: hidden;

  & > svg {
    position: absolute;
  }

  & > svg.CustomArrowPink {
    top: 80%;
    left: 70%;
    zoom: 0.8;
    transform: rotate(180deg);
  }

  & > svg.DotedCircleGrey {
    top: 40%;
    left: -20px;
    zoom: 5;
  }

  & > svg.CustomLine6 {
    top: 60%;
    left: 15%;
    zoom: 0.7;
  }

  & > svg.YellowTrapezoid {
    top: 10%;
    left: 15%;
    zoom: 0.9;
  }

  & > svg.GreenTrapezoid {
    top: 20%;
    left: 23%;
    zoom: 0.9;
  }

  & > svg.PinkLines {
    top: 8%;
    left: 18%;
    zoom: 0.8;
  }

  & > svg.PinkLines:last-of-type {
    top: 5%;
    left: 55%;
    zoom: 0.9;
  }

  @media screen and (max-width: 900px) {
    height: 400px;

    & > svg.YellowTrapezoid {
      top: 10%;
      left: 15%;
      zoom: 0.6;
    }

    & > svg.GreenTrapezoid {
      top: 20%;
      left: 23%;
      zoom: 0.6;
    }

    & > svg.PinkLines {
      top: 8%;
      left: 18%;
      zoom: 0.5;
    }

    & > svg.PinkLines:last-of-type {
      display: block;
      top: 10%;
      left: 55%;
      zoom: 0.7;
    }

    & > svg.CustomLine6 {
      top: 60%;
      left: 5%;
      zoom: 0.6;
    }

    & > svg.CustomArrowPink {
      zoom: 0.6;
    }
  }

  @media screen and (max-width: 480px) {
    min-height: 300px;
    max-height: 300px;

    & > svg.DotedCircleGrey {
      top: 50%;
      left: -25px;
      zoom: 2.5;
    }

    & > svg.PinkLines,
    & > svg.GreenTrapezoid,
    & > svg.YellowTrapezoid,
    & > svg.PinkLines:last-of-type {
      display: none;
    }

    & > svg.CustomLine6 {
      top: 20%;
      left: 70%;
      zoom: 0.3;
    }

    & > svg.CustomArrowPink {
      zoom: 0.3;
      transform: rotate(0deg);
      left: 75%;
    }
  }
`;

export const CustomLink = styled.div`
  position: absolute;
  top: 40%;
  right: 15vw;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  color: #000;
  font-size: 100px;
  font-weight: 400;
  font-family: Catallina;
  white-space: pre-wrap;
  cursor: pointer;

  & > svg.ArrowIncircle {
    position: absolute;
    top: -50%;
    right: -20%;
    zoom: 0.6;
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

  @media screen and (max-width: 1300px) {
    zoom: 0.8;
    right: 20vw;
  }

  @media screen and (max-width: 1100px) {
    zoom: 0.7;
    right: 25vw;
  }

  @media screen and (max-width: 900px) {
    zoom: 0.6;
    right: 35vw;
  }

  @media screen and (max-width: 480px) {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    right: auto;
    font-size: 42px;
    font-weight: 500;
    text-decoration-line: underline;
    text-align: center;
    zoom: 1;

    & > svg.ArrowIncircle {
      display: none;
    }
  }
`;
