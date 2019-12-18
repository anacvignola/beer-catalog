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

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    text-align: center;
    img {
      align-self: center;
      max-width: 250px;
      max-height: 250px;
    }
    > strong {
      padding-top: 15px;
      font-size: 20px;
      line-height: 20px;
      color: #333;
    }
    > span {
      padding-top: 10px;
      font-size: 17px;
      font-weight: bold;
      color: #787773;
    }
    a {
      padding-top: 20px;
      text-decoration: none;
      overflow: hidden;
      margin-top: auto;
      display: flex;
      align-items: center;
      button {
        width: 100%;
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
          0 1px 3px rgba(0, 0, 0, 0.08);
        background: #ff512f;
        background: -webkit-linear-gradient(to right, #f09819, #ff512f);
        background: linear-gradient(to right, #f09819, #ff512f);
        color: #fff;
        border: 0;
        border-radius: 4px;
        overflow: hidden;
        margin-top: auto;
        display: flex;
        align-items: center;
        transition: background 0.2s;
        &:hover {
          transform: translateY(-1px);
          box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1),
            0 3px 6px rgba(0, 0, 0, 0.08);
        }
        div {
          display: flex;
          align-items: center;
          padding: 12px;
          svg {
            margin-right: 5px;
          }
        }
        span {
          flex: 1;
          text-align: center;
          font-size: 18px;
          font-weight: bold;
        }
      }
    }
  }
`;

export const PageActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  button {
    font-size: 18px;
    font-weight: bold;
    background: #fff;
    border-radius: 4px;
    border: 1px solid #ff512f;
    padding: 15px;
    color: #ff512f;
    &:hover {
      font-size: 18px;
      font-weight: bold;
      transition: all 0.5s inherit;
      border: 1px solid #fff;
      transition: all 0.5s ease;
      background: #ff512f;
      color: #fff;
    }
  }
  span {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
  }
`;
