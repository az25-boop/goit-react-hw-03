import React from "react";
import s from "./Contact.module.css";

export default function Contact({ data, onDelete }) {
  return (
    <div className={s.contact}>
      <div>
        <p>
          <IoIosContact className={s.icon} /> {data.name}
        </p>
        <p>
          <FaPhoneAlt className={s.icon} /> {data.number}
        </p>
      </div>
      <button onClick={() => onDelete(data.id)}>Delete</button>
    </div>
  );
}
