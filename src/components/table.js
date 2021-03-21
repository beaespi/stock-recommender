import React from 'react';
import { getFormattedDate, intl } from './common/functions'

const Table = ({header, data}) => {
  return (
    <table
      className="w-100 mb-5"
      role="table"
      aria-label="Stock Table"
    >
      <thead>
        <tr role="row">
          {header.map((head, key) => (
            <th role="columnheader" key={key}>
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length !== 0
          ? (
            data.map((item, key) => (
              <tr key={key} role="row">
                <td role="cell">{getFormattedDate(item.date)}</td>
                <td role="cell">{item.symbol}</td>
                <td role="cell">{intl.format(item.price)}</td>
                <td role="cell">
                  <span className={`badge-${item.rating} badge capitalize inline-block`}>
                    {item.rating}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={header.length}>
                Empty Data
              </td>
            </tr>
          )
        }
      </tbody>
    </table>
  );
};

export default Table;

