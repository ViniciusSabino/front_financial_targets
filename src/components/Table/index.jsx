import React from 'react';

// import {
 
// } from './styles';

const Table = ({ header, data, total }) => {

  return (
    <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Valor Sugerido</th>
              <th>Valor Customizado</th>
              <th>Valor Pago</th>
              <th>Valor Restante</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Teste</td>
              <td>Teste</td>
              <td>Teste</td>
              <td>Teste</td>
              <td>Teste</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>100</td>
              <td>200</td>
              <td>300</td>
              <td>400</td>
            </tr>
          </tfoot>
        </table>
  )
}

export default Table
