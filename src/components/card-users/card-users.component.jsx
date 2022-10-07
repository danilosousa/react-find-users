
const Card = ({ user }) => {
  const { name, email } = user;

  return (
    <div className='card-container'>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;