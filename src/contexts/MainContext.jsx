import { useContext, useReducer } from "react";
import { createContext } from "react";

const CrowdFunding = createContext();

const initialState = {
  totalPrice: 89914,
  maxPrice: 100000,
  name: "",
  totalBackers: 5007,
};

function reducer(state, action) {
  switch (action.type) {
    case "confirm": {
      console.log(action);
      return {
        ...state,
        totalPrice: action.payload.amount + state.totalPrice,
        name: action.payload.opens,
        totalBackers: state.totalBackers++,
      };
    }
    case "clearName": {
      return {
        ...state,
        name: "",
      };
    }
  }
}

function MainContextPage({ children }) {
  const [{ totalPrice, maxPrice, name, totalBackers }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <CrowdFunding.Provider
      value={{ maxPrice, totalPrice, name, totalBackers, dispatch }}
    >
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
