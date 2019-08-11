import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  background: linear-gradient(-90deg, #22202c, #402845);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }

  input {
    border: 0px;
    border-radius: 4px;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 46px;
    padding: 5px 15px;
    color: #fff;
    background: rgba(0, 0, 0, 0.3);
  }

  button {
    background: #ff0058;
    border: 0px;
    height: 40px;
    margin-top: 10px;
    color: #fff;
    border-radius: 4px;
  }

  a {
    display: block;
    color: white;
    margin-top: 20px;
    /* border-bottom: 1px solid #fff; */
  }

  span {
    color: #ff0058;
    display: block;
    font-weight: bold;
    text-align: initial;
    margin: 5px 0;
  }
`;
