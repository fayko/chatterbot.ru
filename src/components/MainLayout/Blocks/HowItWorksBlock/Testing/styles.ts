import styled from 'styled-components';

export const TestingContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const TestLink = styled.div`
  margin: 20px 0 0 0;
  color: #000;
  font-size: 20px;
  font-weight: 400;
  text-decoration-line: underline;

  &:hover {
    color: #7270ff;
  }
`;

export const TestContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-start;
  height: auto;
  cursor: pointer;
  border-bottom: solid 1px #000;

  &:last-child {
    border: none;
  }

  & > svg.arrayNext {
    display: none;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    border-bottom: none;

    &:last-of-type ${TestLink}, &:last-of-type svg.arrayNext {
      display: none;
    }

    & > svg.arrayNext {
      display: block;
      margin: 0 0 30px 0;
    }
  }
`;

export const TestNumber = styled.div`
  display: flex;
  justify-content: center;
  height: 30px;
  width: 30px;
  min-width: 30px;
  margin: 20px 0;
  font-size: 20px;
  font-weight: 500;
  border: solid 1px #000;
  border-radius: 15px;

  @media screen and (max-width: 480px) {
    margin: 0;
    border: none;
    background-color: #7270ff;
    color: #fff;
  }
`;

export const TestInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 20px 20px;
  flex: 2;

  @media screen and (max-width: 480px) {
    align-items: center;
  }
`;

export const TestTitle = styled.div`
  display: flex;
  align-items: center;
  height: 36px;
  font-size: 28px;
  font-weight: 400;
  color: #000;
  user-select: none;

  @media screen and (max-width: 900px) {
    font-size: 22px;
  }

  @media screen and (max-width: 480px) {
    height: auto;
    font-weight: 500;
    text-align: center;
  }
`;

export const PlusButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  min-width: 30px;
  margin: 20px 20px;
  color: #fff;
  font-size: 30px;
  font-weight: 300;
  border-radius: 15px;
  background-color: #7270ff;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const TestText = styled.div`
  margin: 20px 0 0 0;
  white-space: pre-wrap;
  color: #000;
  font-size: 22px;
  font-weight: 300;
  line-height: 130%;

  @media screen and (max-width: 900px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
    white-space: normal;
    text-align: center;
  }
`;

export const InfoWrapper = styled.div`
  display: none;

  &.opened {
    display: block;
  }

  @media screen and (max-width: 480px) {
    &,
    &.opened {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
