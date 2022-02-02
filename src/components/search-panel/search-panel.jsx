import React, { useState } from 'react';
import './search-panel.css';

const SearchPanel = ({ onUpdateSearch }) => {
  const [value, setValue] = useState('');

  const onUpdate = (e) => {
    const term = e.target.value;
    setValue(term);
    onUpdateSearch(term);
  };
  return (
    <input
      type='text'
      className='form-control search-input'
      placeholder='Найти сотрудника'
      value={value}
      onChange={onUpdate}
    />
  );
};

export default SearchPanel;
