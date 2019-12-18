import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  svg {
    animation: ${rotate} 2s linear infinite;
  }
`;

export const Container = styled.div`
  max-width: 1000px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;
  p {
    padding-top: 20px;
    line-height: 2;
    font-size: 16px;
    color: #666;
  }
  span {
    font-weight: bold;
    line-height: 1.5;
    font-size: 18px;
    color: #666;
  }
`;

export const ProductDetails = styled.div`
  padding: 30px;
  display: flex;
  img {
    padding: 30px;
    width: auto;
    height: 450px;
  }
  h1 {
    font-size: 32px;
    margin-top: 10px;
  }
  div {
    display: flex;
    flex-direction: column;
    padding: 30px;
    strong {
      margin-top: 15px;
      font-size: 20px;
      color: #666;
      padding-bottom: 30px;
    }
    p {
      padding-top: 20px;
    }
    tr {
      display: flex;
      align-items: center;
      justify-content: center;
      td {
        border: 3px solid #efefeb;
        width: 100%;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 15px;
        span {
          padding-top: 5px;
          font-size: 12px;
          color: #666;
          overflow: hidden;
        }
      }
    }
  }
`;
