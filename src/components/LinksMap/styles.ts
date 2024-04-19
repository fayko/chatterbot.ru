import styled from 'styled-components';

export const LinksMapContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 2;
  max-width: 700px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    font-size: 25px;
    gap: 20px;
    margin: 30% 0px;
  }
`;

export const CustomLink = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #000;
  text-align: center;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: #0000d1;
  }

  @media screen and (max-width: 1400px) {
    zoom: 0.8;
  }

  @media screen and (max-width: 1400px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 25px;
    color: #000;
  }
`;
