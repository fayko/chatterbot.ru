import styled from 'styled-components';

export const MESSAGE_CLASSES = {
  uniqueEnv: 'unique_enviroment',
  fastProgress: 'fast_progress',
  oneYear: 'one_year'
};

interface IStyledProps {
  corner: 'right' | ' left';
}

export const MessageContainer = styled.div`
  position: relative;
  padding: 32px 46px;
  border-radius: 30px 30px 30px 30px;
  margin: 0 0 20px 0;
  max-width: 95vw;

  /* &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: -16px;
    width: 0;
    height: 0;
    border: solid 8px transparent;
    border-bottom: solid 8px #ffdcf0;
    border-left: solid 8px #ffdcf0;
  } */

  &.${MESSAGE_CLASSES.uniqueEnv} {
    width: 640px;
    margin: 0 0 20px 5%;
    color: #070;
    background-color: #e5fbe4;
  }

  &.${MESSAGE_CLASSES.fastProgress} {
    align-self: flex-end;
    width: 700px;
    color: #d20076;
    background-color: #ffdcf0;
  }

  &.${MESSAGE_CLASSES.oneYear} {
    width: 700px;
    color: #0000d1;
    background-color: #d4d5ff;
  }

  @media screen and (max-width: 1400px) {
    zoom: 0.8;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    margin: 0;
    box-sizing: border-box;
    padding: 25px;
    border-radius: 20px 20px 20px 20px;
    margin: 0 0 20px 0;
    text-align: center;
    zoom: 1;

    &.${MESSAGE_CLASSES.uniqueEnv} {
      width: 90%;
      margin: 0;
    }

    &.${MESSAGE_CLASSES.fastProgress} {
      width: 90%;
      margin: 0;
      align-self: center;
    }

    &.${MESSAGE_CLASSES.oneYear} {
      width: 90%;
    }
  }
`;

export const MessageTitle = styled.div`
  margin: 0 0 15px 0;
  font-size: 36px;
  font-weight: 400;

  @media screen and (max-width: 480px) {
    margin: 0 0 15px 0;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
  }
`;

export const MessageText = styled.div`
  font-size: 20px;
  font-weight: 400;

  @media screen and (max-width: 480px) {
    font-size: 14px;
    line-height: 130%;
  }
`;
