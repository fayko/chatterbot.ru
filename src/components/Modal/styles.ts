import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 800px;
  height: auto;
  z-index: 5;

  & > svg.Close {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 3;
    cursor: pointer;
    margin: 20px;
  }

  @media screen and (max-width: 480px) {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    transform: translate3d(0, 0, 0);

    & > svg.Close {
      position: absolute;
      top: 10px;
      right: 10px;
      transform: translate3d(0, 0, 0);
    }
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 80px 30px;

  @media screen and (max-width: 480px) {
    padding: 10px 0 0 0;

    &.stage2 {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Img = styled.img`
  position: relative;
  background-color: #f8f5e9;
  user-select: none;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 30px 0;
  font-size: 35px;
  font-weight: 500;
  white-space: pre-wrap;

  @media screen and (max-width: 480px) {
    font-size: 28px;
    font-weight: 500;
  }
`;

export const Button = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 20px 0;
  width: 320px;
  height: 60px;
  border-radius: 30px;
  font-size: 20px;
  font-weight: 400;
  background-color: #f0f0f0;
  cursor: pointer;

  &.highlighted {
    background-color: #7270ff;
    color: #fff;
  }
`;

export const Text = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin: 0 0 20px 0;
  max-width: 80%;
  text-align: center;
`;

export const Substrate = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000030;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;