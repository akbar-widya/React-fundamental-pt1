import { useEffect, useState } from "react";
import { useFetch } from "./Topic6Lesson1";

// Only simulation, the code needs to be completed to make it work
// Each keystroke updates query immediately (so the input feels responsive), but debouncedQuery —
// and therefore the fetch — only updates 300ms after typing stops.
function useDebounce(value, delayMs) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delayMs);
    return () => clearTimeout(id);
  }, [value, delayMs]);

  return debounced;
}

function SearchResults() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 300);
  // Lesson 3: How to nest custom hook to other custom hook
  const { data, isLoading } = useFetch(
    debouncedQuery ? `api/search?q=${debouncedQuery}` : null,
  );

  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      {isLoading ? <p>Searching...</p> : <ResultsList results={data} />}
    </>
  );
}

export default function Topic6Lesson3() {
  return (
    <div>Not runnable program</div>
  )
}
