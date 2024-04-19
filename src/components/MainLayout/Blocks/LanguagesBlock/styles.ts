import styled from 'styled-components';

export const LanguagesBlockContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f6ea;
  padding: 8vh 0;
  box-sizing: border-box;

  & > svg {
    position: absolute;
  }

  & > svg.CustomArrowPink {
    top: 20%;
    left: 7%;
    zoom: 0.6;
  }

  & > svg.PinkLines {
    top: 20%;
    left: 80%;
    zoom: 0.8;
  }

  & > svg.BlueLines {
    top: 70%;
    left: 20%;
    zoom: 0.7;
  }

  & > svg.DotedCircleYellow {
    top: 70%;
    right: 7%;
    zoom: 0.6;
  }

  & > svg.DotedCircleGreen {
    display: none;
  }

  & > svg.FourLines.green {
    display: none;
  }

  @media (orientation: landscape) {
    padding: 60px 0;
  }

  @media screen and (max-width: 1100px) {
    & > svg.CustomArrowPink {
      top: 7%;
      left: 3%;
      zoom: 0.4;
    }

    & > svg.BlueLines {
      top: 78%;
      left: 10%;
      zoom: 0.4;
    }

    & > svg.PinkLines {
      top: 10%;
      left: 80%;
      zoom: 0.6;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 50px 0 20px 0;
    background-color: #fff;

    & > svg.PinkLines {
      display: none;
    }

    & > svg.BlueLines {
      display: none;
    }

    & > svg.CustomArrowPink {
      top: -10px;
      left: 40%;
      zoom: 0.3;
      transform: translate(-50%, 0px);
    }

    & > svg.DotedCircleGreen {
      display: block;
      z-index: 2;
      zoom: 0.34;
      top: 90%;
      left: 45%;
    }

    & > svg.DotedCircleYellow {
      display: none;
    }

    & > svg.FourLines.green {
      display: block;
      z-index: 2;
      zoom: 0.55;
      top: 55px;
      left: 70%;
    }
  }
`;

export const TitleContainer = styled.div`
  position: relative;
  margin: 0 0 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg.CustomLine2 {
    position: absolute;
    top: 10px;
    zoom: 0.7;

    @media screen and (max-width: 480px) {
      display: none;
    }
  }

  @media screen and (max-width: 480px) {
    zoom: 0.7;
  }
`;

export const Title = styled.div`
  position: relative;
  font-size: 48px;
  font-weight: 500;
  color: #000;
  text-align: center;
  white-space: pre-wrap;

  @media screen and (max-width: 480px) {
    font-size: 22px;
    color: #fff;
  }
`;

export const CustomLink = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 30px 0 0;
  cursor: pointer;

  & > svg.ArrowIncircle {
    zoom: 0.3;
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

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const LinkTitle = styled.div`
  margin: 0 30px 0 0;
  color: #000;
  font-size: 22px;
  white-space: pre-wrap;
  text-decoration-line: underline;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    margin: 0 10px 0 0;
  }
`;

export const Message = styled.div`
  text-align: center;
  color: #000;
  font-size: 20px;
  font-weight: 300;
  line-height: 130%;

  @media screen and (max-width: 480px) {
    font-size: 16px;
    margin: 0 30px;
    font-weight: 400;
    color: #fff;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 280px;
    background: #7270ff;
    gap: 10px;

    & > div.Button {
      width: 78%;
    }
  }
`;
