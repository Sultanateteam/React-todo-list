import Styles from "../styles/Users.module.css";

function Users({ users, setUsers }) {
  const handleDelete = (ind) =>
    setUsers((prev, i) => prev.filter((u, i) => ind !== i));

  return (
    <div className={Styles.users}>
      {true &&
        users.map((user, i) => (
          <div key={i} className={Styles.user}>
            <img src={'https://picsum.photos/200/300?random=' + i}/>
            <h1>
              {user.name} {user.surname} {user.age}
            </h1>
            <p>From: {user.country}</p>
            <p>Job: {user.job}</p>
            <p>Gender: {user.gender}</p>
            <button onClick={() => handleDelete(i)}>Delete</button>
          </div>
        ))}
    </div>
  );
}

export default Users;
