import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();
  
    this.state = {
      users: [],
      searchField:'',
    }
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()
     
    this.setState(() => {
       return { searchField }
     })
   }

  componentDidMount(){
    let baseUrl = 'https://jsonplaceholder.typicode.com/users';

    fetch(baseUrl)
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      this.setState(
        () => {
          return  { users: users}
        }
      )
    })
  }

  render(){
    const { users , searchField } = this.state;
    const { onSearchChange } = this;

    const filteredUsers = users.filter((user) => {
      return user.name.toLocaleLowerCase().includes(searchField)
    });

    return (

      <div className="App">
        <div className='search-box'>
          <input 
            className='search-box-input'
            type="search"
            placeholder='Buscar...'
            onChange={onSearchChange}
          />
        </div>
        {filteredUsers.map((users) => {
          return(
            <div key={users.id}>
              <h1>{users.name}</h1>
            </div>
          )
          
        })}
      </div>
    )
  }
};


export default App;
