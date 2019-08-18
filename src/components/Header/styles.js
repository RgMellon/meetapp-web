import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 980px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  aside {
    display: flex;
  }

  img {
    width: 35px;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;

  strong {
    font-weight: 500px;
    color: #fff;
    display: block;
    font-size: 17px;
  }

  a {
    color: rgba(255, 255, 255, 0.6);

    &:hover {
      color: rgba(255, 255, 255, 0.9);
    }
  }
`;

export const LogOut = styled.button`
  width: 60px;
  height: 35px;
  border-radius: 5px;
  background: #ff0058;
  border: 0px;

  p {
    color: white;
    font-weight: 700px;
  }
`;
