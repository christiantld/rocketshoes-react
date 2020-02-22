import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Produto</th>
            <th>Qtd</th>
            <th>Subtotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/04/E74-0492-304/E74-0492-304_zoom1.jpg??ims=544xhttps://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/04/E74-0492-304/E74-0492-304_zoom1.jpg??ims=1088x"
                alt="tenis"
              />
            </td>
            <td>
              <strong>Tenis de Corrida</strong>
              <span>R$129,00</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#191920" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#191920" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$258,00</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#191920" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar Pedido</button>

        <Total>
          <span>Total</span>
          <strong>R$1920,00</strong>
        </Total>
      </footer>
    </Container>
  );
}
