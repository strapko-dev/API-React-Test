import React from "react";
import TableRow from "./TableRow";

function Table({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <TableRow key={item.id} data={item} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
