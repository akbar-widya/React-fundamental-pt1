import { useEffect, useState } from "react";

// Wrong: setInterval captures `count` from the render where the effect ran
function BrokenCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <p>Broken counter: {count}</p>;
}

// Right: functional updater doesn't need the current value from the closure
function FixedCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <p>Fixed counter: {count}</p>;
}

export default function Topic3Lesson3() {
  return (
    <>
      <BrokenCounter />
      <FixedCounter />
    </>
  );
}
