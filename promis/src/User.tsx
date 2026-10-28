import { useEffect, useState } from "react";
import { getStudents, type User } from "./api/userApi";

export default function Users() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadUsers() {
          try {
            const data = await getStudents();
            setUsers(data as User[]);
          } catch (err: unknown) {
            setError(
              err instanceof Error
                ? err.message
                : "Произошла неизвестная ошибка"
            );
          } finally {
            setLoading(false);
          }
        }

    loadUsers();
  }, []);

  if (loading) return <p>Загрузка...</p>;

  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div>
      <h1>Список пользователей</h1>

      {/* {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))} */}

      {users.map((user: any) => (
        <div key={user.id}>
            <h3>{user.title}</h3>
            <p>{user.body}</p>
        </div>
        ))}
    </div>
  );
}