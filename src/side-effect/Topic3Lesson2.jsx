import { useEffect, useState } from "react";

function WindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
        setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return <p>WIndow width: {width}</p>
}

export default function Topic3Lesson2() {
  return <WindowWidth />;
}
