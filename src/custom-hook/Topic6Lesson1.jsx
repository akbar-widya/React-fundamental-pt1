import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    setIsLoading(true);

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((json) => {
        if (!ignore) {
          setData(json);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (!ignore) {
          setError(err);
          setIsLoading(false);
        }
      });

    return () => {
      ignore = true;
    };
  }, [url]);

  return { data, isLoading, error };
}

function UserProfile() {
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users/1",
  );

  if (isLoading) return <div>Loading data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Dummy API Result</h2>
      <p>Name: {data?.name}</p>
      <p>Email: {data?.email}</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default function Topic6Lesson1() {
    return <UserProfile />
}