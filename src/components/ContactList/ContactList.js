import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';
import { List } from './ContactListStyled';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <List>
            <ContactItem
              contacts={contacts}
              onDeleteContact={onDeleteContact}
            />
    </List>
  );
}

ContactList.prototype = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};