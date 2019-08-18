import styled from 'styled-components';

export const Container = styled.div`
  max-width: 980px;
  width: 100%;
  padding-top: 80px;
  margin: 0 auto;

  h1 {
    color: #fff;
    font-weight: bold;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Buttons = styled.div`
  button {
    width: 100px;
    height: 40px;
    margin: 0 10px 0px 0px;
    background: #56a6fe;
    color: white;
    border: 0px;
    border-radius: 4px;
    font-weight: bold;
  }

  #cancel {
    background: #ff0058;
  }
`;
export const Main = styled.div`
  margin-top: 40px;

  p {
    color: #fff;
    margin-top: 30px;
    font-size: 16px;
    line-height: 25px;
  }

  span {
    display: block;
    margin-top: 30px;
    margin-bottom: 30px;
    color: white;
    font-weight: 100px;
    font-size: 16px;
  }
`;
export const Info = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.8);
    display: block;
    display: flex;
    align-items: center;

    svg {
      margin-right: 6px;
    }
  }

  time {
    color: white;
    margin-right: 20px;
    display: block;
    color: rgba(255, 255, 255, 0.8);
    display: flex;
    align-items: center;
    svg {
      margin-right: 8px;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 980px;

  img {
    max-width: 100%;
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 4px;
  }
`;
