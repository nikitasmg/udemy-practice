import React from 'react';
import './app-info.css';

const AppInfo = ({ empoloees, increases }) => {
  return (
    <div className='app-info'>
      <h1>Учет сотрудников в компании N</h1>
      <h2>Общее число сотрудников:{empoloees}</h2>
      <h2>премию получат: {increases}</h2>
    </div>
  );
};

export default AppInfo;
