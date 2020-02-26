import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 5px;

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;

    button {
      display: flex;
      align-items: center;
      background: #191920;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      font-size: 13px;
      text-align: center;
      font-weight: bold;
      text-transform: uppercase;
      padding: 12px 20px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.1, '#191920')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #888;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    vertical-align: middle;
    border-bottom: 1px solid #ddd;
  }

  img {
    height: 100px;
  }
  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 16px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 40px;
    }
  }
  button {
    background: none;
    border: 0;
    padding: 6px;
    cursor: pointer;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #888;
    font-weight: bold;
  }

  strong {
    font-size: 18px;
    margin-left: 5px;
  }
`;
