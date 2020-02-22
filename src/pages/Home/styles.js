import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    background: #fff;
    border-radius: 5px;
    padding: 20px;

    img {
      align-items: center;
      max-width: 250px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      display: flex;
      align-items: center;
      background: #191920;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.1, '#191920')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(255, 255, 255, 0.1);

        svg {
          margin-right: 5px;
        }
      }
      span {
        flex: 1;
        font-size: 13px;
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;
      }
    }
  }
`;
