import React from "react";
import s from "./SearchBox.module.css";

export default function SearchBox(filter, onFilter) {
  const searchId = useID();
  return (
    <div className={s.search}>
      <label htmlFor={seachId}>Find contacts by name</label>
      <input
        type="text"
        id={searchId}
        value={filter}
        onChange={(event) => {
          onFilter(event.target.value);
        }}
      />
    </div>
  );
}
