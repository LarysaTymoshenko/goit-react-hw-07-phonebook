import { useEffect, useState } from 'react'
import PropTypes from "prop-types";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditOffRoundedIcon from '@mui/icons-material/EditOffRounded';
import SaveAltRoundedIcon from '@mui/icons-material/SaveAltRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import Loader from '../Loader/Loader';
import s from "./ContactItem.module.css";

function ContactItem({ name, number,onDeleteContact }) {
  return (
    <li className={s.item}>
      <span className={s.itemText}>{name}</span>
      <span className={s.itemText}>{number}</span>
      <button
        type="button"
        className={s.button}
        onClick={onDeleteContact}
      >
        Delete
      </button>
   </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  
};

export default ContactItem;