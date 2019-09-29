import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 300px;
      width: 100%;
      border-radius: 4px;
      background: #eee;
      border: 1px solid rgba(255, 255, 255, 0.3);
    }

    input {
      display: none;
    }
  }
`;
