import React from 'react';
import './app-filter.css';

const AppFilter = (props) => {
  const btnCollection = [
    { name: 'all', label: 'Все сотрудники' },
    { name: 'rise', label: 'На повышение' },
    { name: 'moreThen1000', label: 'З/П больше 1000$' },
  ];

  const buttons = btnCollection.map(({ name, label }) => {
    const active = props.filter === name;
    const clazz = active ? 'btn btn-light' : 'btn btn-outline-light';

    return (
      <button
        className={clazz}
        type='button'
        key={name}
        onClick={() => props.onFilterPost(name)}
      >
        {label}
      </button>
    );
  });
  return <div className='btn-group'>{buttons}</div>;
};

export default AppFilter;
