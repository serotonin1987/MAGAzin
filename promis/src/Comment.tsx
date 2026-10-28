import { useEffect, useState } from "react";
import { getComments, type Comment } from "./api/commentApi";


export default function Comments() {
    const [comments, setComments] = useState<Comment[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadComments() {
          try {
            const data = await getComments();
            setComments(data as Comment[]);
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

    loadComments();
  }, []);

  if (loading) return <p>Загрузка...</p>;

  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div>
      <h1>Список комментариев</h1>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h3>{comment.name}</h3>
          <p>{comment.email}</p>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
}