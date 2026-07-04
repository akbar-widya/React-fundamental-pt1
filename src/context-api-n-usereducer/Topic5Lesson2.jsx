import { useReducer, useState } from "react";

function cartReducer(state, action) {
  switch (action.type) {
    case "added":
      return { ...state, items: [...state.items, action.item] };
    case "removed":
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.id),
      };
    case "cleared":
      return { ...state, items: [] };
    default:
      throw new Error(`Unknown action ${action.type}`);
  }
}

function Cart() {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    if (inputValue.trim === "") return;
    dispatch({
      type: "added",
      item: { id: Date.now(), name: inputValue },
    });
    setInputValue("")
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => handleAddItem()}>
        add item
      </button>
      <button onClick={() => dispatch({ type: "cleared" })}>
        Clear cart ({state.items.length})
      </button>
      <ul>
        {state.items.map((i) => (
            <li key={i.id}>{i.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Topic5Lesson2() {
  return <Cart />;
}
