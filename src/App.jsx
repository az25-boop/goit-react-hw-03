import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Contact from "./components/Contact/Contact";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import s from "./App.css";
import contact from "./contact.json";

export default function App() {
  return (
    <>
      <div className={s.app}>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
        <Contact
          contact={contact.id}
          name={contact.name}
          number={contact.number}
        />
      </div>
    </>
  );
}
