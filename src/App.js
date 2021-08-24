import React from 'react';
import Container from "./Components/Container";
import ContactForm from "./Components/ContactsForm";
import Filter from "./Components/SearchFilter";
import ContactList from "./Components/ContactsList";

  export default function App() {
  return (
    <>
      <Container>
        <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
          <ContactList />
    </Container>
    </>
  );
}
