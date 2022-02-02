import React, { useState } from 'react';
import './employees-add-form.css';

const EmployeesAddForm = ({ onAddNewItem }) => {
  const [inputState, setInputState] = useState({
    name: '',
    salary: '',
  });
  const { name, salary } = inputState;
  const onValueChange = (e) => {
    setInputState((previousState) => {
      return { ...previousState, [e.target.name]: e.target.value };
    });
  };

  const addNewEmploye = (e) => {
    e.preventDefault();
    onAddNewItem(name, salary);
    setInputState({
      name: '',
      salary: '',
    });
  };

  return (
    <div className='app-add-form'>
      <h3>Добавьте нового сотрудника</h3>
      <form className='add-form d-flex' onSubmit={addNewEmploye}>
        <input
          onChange={onValueChange}
          value={name}
          type='text'
          className='form-control new-post-label'
          placeholder='Как его зовут?'
          name='name'
        />
        <input
          onChange={onValueChange}
          value={salary}
          type='number'
          className='form-control new-post-label'
          placeholder='З/П в $?'
          name='salary'
        />

        <button type='submit' className='btn btn-outline-light'>
          Добавить
        </button>
      </form>
    </div>
  );
};

export default EmployeesAddForm;
