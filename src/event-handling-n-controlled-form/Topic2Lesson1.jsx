import { useState } from "react";

function SearchBox() {
  const [query, setQuery] = useState("");

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search..."
    />
  );
}

export default function Topic2Lesson1() {
  return <SearchBox />;
}
