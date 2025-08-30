import { useReducer, createContext, useContext } from "react";

const Context = createContext();
const ContextDispatch = createContext();
export default function ContextProvider({ children }) {
  const [items, dispatch] = useReducer(reducerFunction, []);

  return (
    <Context value={items}>
      <ContextDispatch value={dispatch}>{children}</ContextDispatch>
    </Context>
  );
}
export function useItems() {
  return useContext(Context);
}
export function useItemsDispatch() {
  return useContext(ContextDispatch);
}
function reducerFunction(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.item];
  }
}
