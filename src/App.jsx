// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import { Contact, ContactForm, ContactList, SearchBox } from "components";
import Contact from "./components/Contact/Contact";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

// import "./App.css";
import contact from "./data/contact.json";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
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

export default App;
