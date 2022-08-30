import React from "react";
import PropTypes from 'prop-types';
import {FaEdit, FaWarehouse } from 'react-icons/fa';

import './tarefas.css'


export default function Tarefas({tarefas, handleEdit, handleDelete}) {
  return(
    <ul className="tarefa">
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <span>
            <FaEdit
              className="edit"
              onClick={(e) => handleEdit(e, index)}
            />
            <FaWarehouse
              className="delete"
              onClick={(e) => handleDelete(e, index)}
            />
          </span>
        </li>
      ))};
    </ul>
  );
};

Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
