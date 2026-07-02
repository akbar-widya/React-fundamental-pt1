import { useState } from "react";
import Topic1Lesson1 from "./props-n-component/Topic1Lesson1";
import Topic1Lesson2 from "./props-n-component/Topic1Lesson2";
import Topic1Lesson3 from "./props-n-component/Topic1Lesson3";
import Topic2Lesson1 from "./event-handling-n-controlled-form/Topic2Lesson1";
import Topic2Lesson2 from "./event-handling-n-controlled-form/Topic2Lesson2";
import Topic2Lesson3 from "./event-handling-n-controlled-form/Topic2Lesson3";
import Topic3Lesson1 from "./side-effect/Topic3Lesson1";
import Topic3Lesson2 from "./side-effect/Topic3Lesson2";
import Topic3Lesson3 from "./side-effect/Topic3Lesson3";

const lessonRegistry = {
  1.1: { title: "Prop & component 1", component: Topic1Lesson1 },
  1.2: { title: "Prop & component 2", component: Topic1Lesson2 },
  1.3: { title: "Prop & component 3", component: Topic1Lesson3 },
  2.1: { title: "Event handling & form 1", component: Topic2Lesson1 },
  2.2: { title: "Event handling & form 2", component: Topic2Lesson2 },
  2.3: { title: "Event handling & form 3", component: Topic2Lesson3 },
  3.1: { title: "Side effect 1", component: Topic3Lesson1 },
  3.2: { title: "Side effect 2", component: Topic3Lesson2 },
  3.3: { title: "Side effect 3", component: Topic3Lesson3 },
};

function App() {
  const [activeId, setActiveId] = useState("1.1");

  const ActiveComponent = lessonRegistry[activeId].component;

  return (
    <div>
      <ul class="grid-container">
        {Object.entries(lessonRegistry).map(([id, data]) => (
          <li key={id}>
            <button style={{ width: "100%" }} onClick={() => setActiveId(id)}>{data.title}</button>
          </li>
        ))}
      </ul>

      <ActiveComponent />
    </div>
  );
}

export default App;
