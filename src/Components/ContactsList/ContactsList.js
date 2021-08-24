import React from "react";
import { connect } from 'react-redux';
import contactsAction from '../../redux/contact/contact-action';
import style from "./ContactsList.module.css";
import PropTypes from "prop-types";

const ContactsList = ({ contacts, deleteContacts }) => {
  return (
    <ul className={style.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={style.item}>
          <p className={style.textName}>{name}</p>
          <p className={style.textNumber}>{number}</p>
          <button type="button" className={style.button} onClick={() => deleteContacts(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  deleteContacts: PropTypes.func,
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  deleteContacts: id => dispatch(contactsAction.deleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);