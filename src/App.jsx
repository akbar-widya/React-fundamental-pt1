import { useState } from "react";
import Topic1Lesson1 from "./props-n-component/Topic1Lesson1";
import Topic1Lesson2 from "./props-n-component/Topic1Lesson2";
import Topic1Lesson3 from "./props-n-component/Topic1Lesson3";

const lessonRegistry = {
  1.1: { title: "Prop & component 1", component: Topic1Lesson1 },
  1.2: { title: "Prop & component 2", component: Topic1Lesson2 },
  1.3: { title: "Prop & component 3", component: Topic1Lesson3 },
};

function App() {
  const [activeId, setActiveId] = useState("1.1");

  const ActiveComponent = lessonRegistry[activeId].component;

  return (
    <div>
      <ul>
        {Object.entries(lessonRegistry).map(([id, data]) => (
          <li key={id}>
            <button onClick={() => setActiveId(id)}>
              {data.title}
            </button>
          </li>
        ))}
      </ul>

      <ActiveComponent />
    </div>
  );
}

export default App;
