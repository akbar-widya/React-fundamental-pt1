import { useState } from "react";
import { CartProvider, useCart } from "./CartContext";

function CartApp() {
  const { state, dispatch } = useCart();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    dispatch({
      type: "added",
      item: { id: Date.now(), name: inputValue },
    });

    setInputValue("");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type an item..."
          style={{ marginRight: "10px", padding: "4px" }}
        />
        <button type="submit">Add to Cart</button>
      </form>

      <h3>Cart Items ({state.items.length})</h3>
      <ul>
        {state.items.map((item) => (
          <li key={item.id} style={{ marginBottom: "8px" }}>
            {item.name}{" "}
            <button onClick={() => dispatch({ type: "removed", id: item.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Topic5Lesson3() {
  return (
    <CartProvider>
      <CartApp />
    </CartProvider>
  );
}