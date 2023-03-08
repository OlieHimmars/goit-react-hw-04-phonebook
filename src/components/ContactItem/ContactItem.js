import propTypes from 'prop-types';
import { Item, DelButton } from './ContactItemStyled';

const ContactItem = ({ contactId, name, number, onDeleteContact }) => {
  return (
    <Item>
      <span>{name}:</span>
      <span>{number}</span>
      <DelButton type="button" onClick={() => onDeleteContact(contactId)}>
        Delete
      </DelButton>
    </Item>
  );
};

ContactItem.propTypes = {
  name: propTypes.string.isRequired,
  contactId: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  onDeleteContact: propTypes.func.isRequired,
};

export default ContactItem;
