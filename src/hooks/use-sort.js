import { useState } from "react";

function useSort(config, data) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const sortOrders = [null, "asc", "desc"];
  const setSortColumn = (label) => {
    setSortOrder((current) => {
      if (sortBy === label) {
        const orderIndex = sortOrders.indexOf(current);
        return sortOrders[(orderIndex + 1) % 3];
      } else return sortOrders[1];
    });
    setSortBy(label);
  };
  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }
  return { sortBy, sortOrder, sortedData, setSortColumn };
}

export default useSort;
