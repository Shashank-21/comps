import { Fragment } from "react";

function Table({ data, config, keyFn }) {
  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return (
        <td className="px-4 py-2 mx-auto text-center border" key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });

    return (
      <tr className="border" key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    );
  });

  const renderedHeaders = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }
    return (
      <th className="px-8 mx-4 text-center border" key={column.label}>
        {column.label}
      </th>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
