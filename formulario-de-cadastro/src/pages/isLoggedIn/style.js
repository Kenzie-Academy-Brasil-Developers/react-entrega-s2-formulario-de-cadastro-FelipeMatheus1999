import styled from "styled-components";
import image from "../../assets/undraw_High_five_re_jy71.svg";

export const Container = styled.div`
  background: #caf0f8;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  h2 {
    color: rgb(219, 87, 120);
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }

  @media (max-width: 580px) {
    h2 {
      font-size: 30px;
    }
  }
`;

export const DivImage = styled.div`
  @media (min-width: 700px) {
    width: 50%;
    height: 50%;
    background: url(${image}) no-repeat center;
    background-size: contain;
  }
`;
