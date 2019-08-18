import styled from 'styled-components';

export const Container = styled.div`
  max-width: 980px;
  width: 100%;
  margin: 0 auto;

  form {
    margin-top: 60px;
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;

    input {
      color: white;
      height: 50px;
      margin: 20px 0 20px 0px;
      border: 0px;
      padding: 5px 15px;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 4px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    textarea {
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
      border-radius: 4px;
      color: white;
      background: rgba(0, 0, 0, 0.3);
      height: 100px;
      border: 0px;
      padding: 15px 15px;
    }
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    width: 180px;
    height: 40px;
    background: #ff0058;
    border: 0px;
    border-radius: 4px;
    color: white;
    padding: 0 20px;
    align-items: center;

    display: flex;
    justify-content: space-between;
  }
`;
