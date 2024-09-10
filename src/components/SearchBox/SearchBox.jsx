import React from "react";
import s from "./SearchBox.module.css";

export default function SearchBox(filter, onFilter) {
  const searchID = useID();
  return (
    <div className={s.search}>
      <label htmlFor=""></label>
      <input type="text" />
    </div>
  );
}
