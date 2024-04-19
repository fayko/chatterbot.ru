import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > svg.ChatterLogo {
    margin: 0 20px 0 0;
    min-width: 130px;
  }

  & > svg.MobileMenu {
    display: none;
  }

  @media screen and (max-width: 900px) {
    & > svg.ChatterLogo {
      margin: 0 15px 0 0;
      min-width: 100px;
      max-width: 120px;
    }
  }

  @media screen and (max-width: 480px) {
    & > svg.ChatterLogo {
      margin: 0 20px 0 0;
      min-width: 100px;
      max-width: 150px;
    }

    & > div.LinksMap {
      display: none;
    }

    & > svg.MobileMenu {
      display: block;
    }
  }
`;

export const TelegrammBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0 20px;

  &:hover {
    & > svg > path {
      fill: #7270ff;
    }

    & > div {
      color: #fff;
      background-color: #7270ff;
      border: solid 1px transparent;
    }
  }

  @media screen and (max-width: 1400px) {
    scale: 0.8;
  }

  @media screen and (max-width: 900px) {
    scale: 0.6;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const SubscribeButton = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 15px;
  min-width: 290px;
  width: 290px;
  height: 53px;
  border-radius: 30px;
  border: 1px solid #000;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    background-color: #00000007;
  }

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const CloseWrapper = styled.div``;

export const MobileModalMenu = styled.div`
  display: none;

  @media screen and (max-width: 480px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 5% 7% 10% 7%;
    box-sizing: border-box;
    background: linear-gradient(180deg, #f8f5e9 0%, #fff 100%);
    z-index: 3;

    &.hidden {
      display: none;
    }

    &.LinksMap {
      display: none;
    }
  }
`;
