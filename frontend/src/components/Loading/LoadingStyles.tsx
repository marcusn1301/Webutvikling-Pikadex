import styled from "styled-components";

export const LoadingOuter = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingBall = styled.img`
  position: fixed;
  top: 50%;
  left: 50%;
  margin: -50px 0px 0px -50px;
  width: 100px;
  height: 100px;

  animation: App-logo-spin infinite 1s linear;

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
