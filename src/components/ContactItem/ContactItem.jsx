import React from 'react';
import PropTypes from 'prop-types';

import { ContactsItem, ContactName, ContactDelete } from './ContactItem.styled';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <ContactsItem>
      <ContactName>
        {name}: <a href="tel:">{number}</a>
      </ContactName>
      <ContactDelete onClick={() => onDeleteContact(id)} type="button">
        Delete
      </ContactDelete>
    </ContactsItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
