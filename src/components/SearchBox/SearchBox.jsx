import { useId } from "react";
import s from "./SearchBox.module.css";

export default function SearchBox({ filter, onFilter }) {
  const searchId = useId();
  return (
    <div className={s.search}>
      <label htmlFor={searchId}>Find contacts by name</label>
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
