

const Card = ({ user }) => {
  const { id, name, email, company,address } = user;

  return (
  <tbody>
    <tr>
        <td>{id}</td>
        <td>{name}e</td>
        <td>{email}</td>
        <td>{company.name}</td>
        <td>{address.street}</td>
        <td>{address.city}</td>
    </tr>
  </tbody>
  );
};

export default Card;