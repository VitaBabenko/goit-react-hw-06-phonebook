import { useSelector } from 'react-redux';
import { GlobalStyle } from '../GlobalStyle';
import { ContactForm } from '../contactForm/ContactForm';
import { Filter } from '../filter/Filter';
import { ContactList } from '../contactList/ContactList';
import { getContacts } from '../../redux/contactsSlice';
import { Container, Title, SecondTitle } from './App.styled';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <GlobalStyle />
      <Title>Phonebook</Title>
      <ContactForm />
      {contacts.length > 0 && (
        <>
          <SecondTitle>Contacts</SecondTitle>
          <Filter />
          <ContactList />
        </>
      )}
    </Container>
  );
};
