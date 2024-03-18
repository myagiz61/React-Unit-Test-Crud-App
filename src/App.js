import { useState } from "react";
import UserForm from "./components/form/UserForm";
import UserList from "./components/list/UserList";

function App() {
  const [users, setUsers] = useState([
    { name: "mehmet", email: "mehmet61@gmail.com" },
    { name: "ali", email: "ali1987@gmail.com" },
  ]);

  // kullanıcıyı ekleme fonksiyonu
  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="App">
      <UserForm addUser={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
