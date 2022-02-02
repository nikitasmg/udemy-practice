import React, { useState } from 'react';
import nextId from 'react-id-generator';

import './app.css';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../emploees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

const App = () => {
  const [data, setData] = useState([
    {
      name: 'John C.',
      salary: 800,
      increase: false,
      rise: false,
      id: nextId(),
    },
    {
      name: 'Alex M.',
      salary: 3000,
      increase: false,
      rise: false,
      id: nextId(),
    },
    {
      name: 'Carl W.',
      salary: 5000,
      increase: false,
      rise: false,
      id: nextId(),
    },
  ]);

  const [term, setTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const increased = data.filter((el) => el.increase).length;

  const deleteItem = (id) => {
    setData(data.filter((el) => el.id !== id));
  };
  const addNewEmployToData = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: nextId(),
    };
    if (name && salary) {
      setData([...data, newItem]);
    }
  };

  const onToggleProp = (id, prop) => {
    setData(
      data.map((el) => {
        if (el.id === id) {
          return { ...el, [prop]: !el[prop] };
        }
        return el;
      })
    );
  };

  const searchEmp = (items, term) => {
    if (!term) {
      return items;
    }

    return items.filter((el) => el.name.indexOf(term) > -1);
  };

  const onUpdateSearch = (term) => {
    setTerm(term);
  };

  const filterPost = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter((el) => el.rise);
      case 'moreThen1000':
        return items.filter((el) => el.salary > 1000);
      default:
        return items;
    }
  };

  const onFilterPost = (filter) => {
    setFilter(filter);
  };

  const visibleData = filterPost(searchEmp(data, term), filter);

  return (
    <div className='app'>
      <AppInfo empoloees={data.length} increases={increased} />

      <div className='search-panel'>
        <SearchPanel onUpdateSearch={onUpdateSearch} />
        <AppFilter filter={filter} onFilterPost={onFilterPost} />
      </div>
      <EmployeesList
        data={visibleData}
        onDelete={deleteItem}
        onToggleProp={onToggleProp}
      />
      <EmployeesAddForm onAddNewItem={addNewEmployToData} />
    </div>
  );
};

export default App;
