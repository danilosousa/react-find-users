import Card from '../card-users/card-users.component';
import '../card-users/card-users.styles.css';
const CardList = ({ users }) => (

    <div className='list-container'>
      <table className="table-list">
      <thead>
          <tr className='table-list-head'>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Empresa</th>
            <th>Endereço / Rua</th>
            <th>Cidade</th>
          </tr>
      </thead>
      {users.map((user) => {
        return <Card key={user.id} user={user} />;
      })}
      </table>
    </div>
);

export default CardList;