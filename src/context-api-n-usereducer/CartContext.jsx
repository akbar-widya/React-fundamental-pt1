import { createContext, useContext, useMemo, useReducer } from "react";

const CartContext = createContext(null);

// Context and useReducer combine naturally: the reducer owns the update logic, 
// and context distributes state and dispatch so any component in the tree 
// can read state or fire an action without threading props through every layer.
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

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}