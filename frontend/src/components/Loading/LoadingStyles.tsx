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

export const DotFlashing = styled.div`
  position: absolute;
  top: 65%;
  left: 50%;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #bd1808;
  color: #bd1808;
  animation: dotFlashing 1s infinite linear alternate;
  animation-delay: 0.5s;

  &::before,
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
  }

  &::before {
    left: -15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #bd1808;
    color: #bd1808;
    animation: dotFlashing 1s infinite alternate;
    animation-delay: 0s;
  }

  &::after {
    left: 15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #bd1808;
    color: #bd1808;
    animation: dotFlashing 1s infinite alternate;
    animation-delay: 1s;
  }

  @keyframes dotFlashing {
    0% {
      background-color: #bd1808;
    }
    50%,
    100% {
      background-color: #ebe6ff;
    }
  }
`;
