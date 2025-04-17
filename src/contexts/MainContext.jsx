import { useContext, useReducer } from "react";
import { createContext } from "react";

const CrowdFunding = createContext();

const initialState = {
  totalPrice: 89914,
  maxPrice: 100000,
};

function reducer(state, action) {
  switch (action.type) {
    case 1:
  }
}

function MainContextPage({ children }) {
  const [{ totalPrice, maxPrice }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <CrowdFunding.Provider value={{ maxPrice, totalPrice, dispatch }}>
      {children}
    </CrowdFunding.Provider>
  );
}

function useCrowdfund() {
  const context = useContext(CrowdFunding);
  if (context === undefined)
    throw new Error("ThemeContext was used outside of context provider");
  return context;
}

export { MainContextPage, useCrowdfund };
