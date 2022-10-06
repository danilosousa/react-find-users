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
        }, 
        () => {
          console.log(this.state)
        }
      )
    })
  }

  render(){

    const filteredUsers = this.state.users.filter((user) => {
      return user.name.toLocaleLowerCase().includes(this.state.searchField)
    });

    return (

      <div className="App">
        <div className='search-box'>
          <input 
            className='search-box-input'
            type="search"
            placeholder='Buscar...'
            onChange={(event) => {
             const searchField = event.target.value.toLocaleLowerCase()
              console.log('this.state.users =>',this.state.users);
             

              this.setState(() => {
                return { searchField }
              })
            }}
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
