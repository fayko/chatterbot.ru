import styled from 'styled-components';

export const AdvantagesBlockContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: visible;
  padding: 10vh 0 10vh 0;
  box-sizing: border-box;

  & > svg.BlueLines {
    position: absolute;
    top: 20%;
    left: 80%;
    transform: rotate(90deg);
  }

  & > svg.YellowTrapezoid {
    position: absolute;
    top: 93%;
    left: 78%;
    transform: scale(-1.2, 1.2);
  }

  & > svg.GreenTrapezoid {
    position: absolute;
    top: 85%;
    left: 86%;
    zoom: 1.5;
    transform: rotate(-5deg);
  }

  & > svg.CustomArrowPink {
    zoom: 0.8;
  }

  @media screen and (max-width: 900px) {
    padding: 40px 0 120px 0;

    & > svg.CustomArrowPink {
      zoom: 0.5;
    }

    & > svg.BlueLines {
      top: 15%;
      zoom: 0.6;
    }

    & > svg.GreenTrapezoid {
      zoom: 1;
      top: 88%;
    }

    & > svg.YellowTrapezoid {
      zoom: 0.7;
    }
  }

  @media screen and (max-width: 480px) {
    margin: 40px 0 0 0;
    padding: 0 0 20px 0;

    & > svg {
      display: none;
    }
  }
`;

export const TitleContainer = styled.div`
  position: relative;
  top: -70px;
  left: 50%;
  transform: translate(-50%);

  & > svg.CustomLine1 {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
  }

  @media screen and (max-width: 900px) {
    zoom: 0.7;
  }

  @media screen and (max-width: 480px) {
    top: 30px;
    margin: 0 0 50px 0;

    & > svg.CustomLine1 {
      zoom: 0.44;
    }
  }
`;

export const Title = styled.div`
  position: relative;
  font-size: 48px;
  font-weight: 500;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 30px;
    white-space: nowrap;
  }
`;

export const MessagesContainer = styled.div`
  position: relative;
  left: 50%;
  transform: translate(-50%);
  margin: 30px 0 0 0;
  width: 78%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    width: 100%;
    margin: 40px 0 0 0;
    gap: 20px;
    align-items: center;
  }
`;
