import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';
import { List } from './ContactListStyled';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <ContactItem
              name={name}
              number={number}
              onDeleteContact={() => onDeleteContact(id)}
              contactId={id}
            />
          </li>
        );
      })}
    </List>
  );
}

ContactList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};