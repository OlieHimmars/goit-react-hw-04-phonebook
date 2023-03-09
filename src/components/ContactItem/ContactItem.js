import React from 'react';
import { Item, DelButton } from './ContactItemStyled';

const ContactItem = ({ contacts, onDeleteContact }) => 
  contacts.map(({ id, name, number }) => {
    return (
    <Item key={id}>
      <span>{name}:</span>
      <span>{number}</span>
      <DelButton type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </DelButton>
    </Item>
  );
});

export default ContactItem;