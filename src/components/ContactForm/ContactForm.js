import { useState } from 'react';
import { Formik } from 'formik';
import { MainForm, AddButton, FormLabel, Input } from './ContactFormStyled';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onChangeName = e => setName(e.target.value);
  const onChangeNumber = e => setNumber(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
    >
      <MainForm autoComplete="off">
        <div>
          <FormLabel htmlFor="name">Name</FormLabel>
          <div>
            <Input
              onChange={onChangeName}
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
        </div>
        <div>
          <FormLabel htmlFor="number">Number</FormLabel>
          <div>
            <Input
              onChange={onChangeNumber}
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </div>
        </div>
        <AddButton type="submit">Add contact</AddButton>
      </MainForm>
    </Formik>
  );
}
