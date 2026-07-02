import { useEffect, useState } from "react";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let ignore = false;

    fetchUser(userId).then((data) => {  // simulate API fetch
      if (!ignore) setUser(data);
    });

    return () => {
      ignore = true;
    };
  }, [userId]);

  if (!user) return <p>Loading...</p>
  return <h1>{user.name}</h1>
}

export default function Topic3Lesson1() {
  return <UserProfile />;
}
