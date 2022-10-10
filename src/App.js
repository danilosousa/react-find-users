import { useState, useEffect } from 'react';

import CardList from './components/list-users/list-users.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilterUsers] = useState(users);

  useEffect(() => {
    const baseURL = 'https://jsonplaceholder.typicode.com/users';
    fetch(baseURL)
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);

  useEffect(() => {
    const newFilteredUsers = users.filter((user) => {
      return user.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterUsers(newFilteredUsers);
  }, [users, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Busca de Usuários</h1>

      <SearchBox
        className='users-search-box'
        onChangeHandler={onSearchChange}
        placeholder='Buscar por Usuários'
      />
      <CardList users={filteredUsers} />
      
      
    </div>
  );
};

export default App;