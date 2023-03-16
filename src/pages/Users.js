import { useEffect, useState } from "react";
import "../App.css";
import { getUsers } from "../services/users";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const payload = await getUsers();
      console.log(payload.data?.data);
      if (payload.status === 200) {
        setUsers(payload.data?.data || []);
      } else throw payload;
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>users</h1>
      {loading
        ? "loading"
        : users.length === 0
        ? "data gk ada"
        : users.map((item, index) => {
            return (
              <p key={item.id}>
                {item?.first_name} {item?.last_name}
              </p>
            );
          })}
    </div>
  );
}

export default Users;
