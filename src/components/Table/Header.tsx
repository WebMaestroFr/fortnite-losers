import React, { FC, useEffect, useState } from "react";

import { byAmount } from "../../utils";
import Icon from "../Icon";

const TableSortColumn: FC<{
  initialSort?: "up" | "down";
  name: string;
  type?: "string" | "array" | "date";
  onSort: (c: (l: any[]) => any[]) => void;
}> = ({ children, initialSort, name, onSort, type }) => {
  const [direction, setDirection] = useState<"down" | "up" | undefined>(
    initialSort
  );

  const handleClick = () => {
    setDirection(direction === "down" ? "up" : "down");
  };

  useEffect(() => {
    const sortCallback = (list: any[]) => {
      const byProp = (a: any, b: any) =>
        byAmount(type)(a[name] || 0, b[name] || 0);
      switch (direction) {
        case "down":
          return [...list.sort(byProp)];
        case "up":
          return [...list.sort(byProp).reverse()];
        default:
          return list;
      }
    };
    onSort(sortCallback);
  }, [direction, name, onSort, type]);

  return (
    <th className="TableSortColumn" onClick={handleClick} scope="col">
      {children} <Icon name={`sort-${direction === "down" ? "up" : "down"}`} />
    </th>
  );
};

export default TableSortColumn;
