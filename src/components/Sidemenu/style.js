import styled from 'styled-components';

export const Container = styled.div`
  grid-column: 1;
  grid-row: 1 / span 2;
  background: #fff;
  padding: 20px 15px 40px 40px;

  display: grid;
  grid-template-rows: 40px 40px 60vh;
  grid-row-gap: 20px;
`;

export const LogoContainer = styled.div`
  img {
    height: 40px;
  }
`;

export const SearchContainer = styled.div`
  background: rgb(249, 249, 251);
  border-radius: 8px;

  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;

  input {
    width: 100%;
    background: transparent;
    border: none;
    padding-left: 10px;
    font-size: .8rem;
    color: rgb(99, 99, 108);

    &:focus {
      outline: none;
    }
  }

  svg {
    padding: 0 5px;
    opacity: .6;
  }
`;

export const LinksContainer = styled.div`
  padding: 20px 0;
  border-top: 1px solid #ddd;

  h1 {
    font-size: .6rem;
    margin-bottom: 20px;
    opacity: .8;
  }
`;

export const LinkItem = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  color: rgb(99, 99, 108);
  cursor: pointer;

  h2 {
    font-size: .8rem;
    font-weight: 400;
  }
`;
