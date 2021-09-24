import styled from "styled-components";
import image from "../../assets/undraw_Welcome_re_h3d9.svg";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: stretch;
  align-items: center;
`;

export const Content = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  form {
    margin-bottom: 200px;
  }
`;

export const Background = styled.div`
  background-color: red;
  @media (min-width: 1100px) {
    width: 50%;
    height: 50%;
    background: url(${image}) no-repeat center;
    background-size: contain;
  }
`;
