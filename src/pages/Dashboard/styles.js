import styled from 'styled-components';

export const Container = styled.div`
  max-width: 980px;
  width: 100%;
  margin: 0 auto;
  margin-top: 50px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 30px;
    color: white;
  }

  a {
    width: 160px;
    height: 40px;
    border: 0px;
    background: #ff0058;
    color: white;
    font-weight: bold;
    border-radius: 4px;
    display: flex;
    padding: 0 15px;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export const Main = styled.div`
  margin-top: 50px;
`;

export const Item = styled.div`
  margin-top: 20px;
  height: 60px;
  padding: 30px 15px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  h4 {
    font-weight: 700px;
    color: white;
    font-size: 17px;
  }

  div {
    align-items: center;
    display: flex;

    time {
      display: block;
      color: white;
      margin-right: 40px;
      /* padding-left */
    }
  }
`;
