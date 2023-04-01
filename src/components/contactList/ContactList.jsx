import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getContacts } from '../../redux/contactsSlice';
import { getFilter } from '../../redux/filterSlice';
import { ContactListItem } from '../contactListItem/ContactListItem';
import { List, ListItem } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const visibleFilter = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContacts = visibleFilter();

  return (
    <List>
      {visibleContacts.map(contact => {
        return (
          <ListItem key={contact.id}>
            <ContactListItem contact={contact} />
          </ListItem>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
