import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { Form, Label, Input, AddContact } from './ContactForm.styled';

class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  inputNameId = nanoid();
  inputNumberId = nanoid();

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => this.setState({ name: '', number: '' });

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleSubmit} autoComplete="off">
        <Label htmlFor={this.inputNameId}>Name</Label>
        <Input
          id={this.inputNameId}
          placeholder="Enter contact..."
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Label htmlFor={this.inputNumberId}>Number</Label>
        <Input
          id={this.inputNumberId}
          placeholder="Enter number..."
          type="tel"
          name="number"
          value={number}
          onChange={this.handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <AddContact type="submit">Add contact</AddContact>
      </Form>
    );
  }
}

export default ContactForm;
