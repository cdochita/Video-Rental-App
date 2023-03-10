import React, { Component } from "react";
const List = (props) => {
  const { textProperty, valueProperty, items, onItemSelect, selectedItem } =
    props;

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};
List.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};
export default List;
