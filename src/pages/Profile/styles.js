import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 980px;
  width: 100%;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 80px;

    button {
      height: 80%;
      margin-top: 20px;
      margin-bottom: 80px;
      height: 50px;
      background: #ff0058;
      border: 0px;
      color: #fff;
      font-size: 17px;

      &:hover {
        background: ${darken(0.1, '#ff0058')};
      }
    }
  }

  input {
    width: 100%;
    height: 50px;
    padding: 5px 10px;
    border: 0px;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    margin-top: 20px;
    border-radius: 5px;
  }
`;

export const Separetor = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
  width: 80%;
  height: 0.5px;
  background: #fff;
  display: flex;
  align-self: center;
`;
