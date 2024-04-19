import styled from 'styled-components';

export const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  width: 100%;
  max-width: 320px;
  margin: 10px 0;
  border-radius: 22px;
  color: #fff;
  font-weight: 500;
  align-self: center;
  cursor: pointer;
  background-color: #7270ff;

  & > svg {
    margin: 0 0 0 10px;
  }

  &:hover {
    filter: saturate(5%);
  }

  &.two {
    background-color: #fff181;
    color: #7270ff;

    & > svg > path {
      fill: #7270ff;
    }
  }

  @media screen and (min-width: 480px) {
    display: none;
  }
`;
