import React from "react";

function TableRow({ data }) {
  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.title}</td>
    </tr>
  );
}

export default TableRow;
