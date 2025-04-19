import { useContext, useReducer } from "react";
import { createContext } from "react";
import data from "../data";

const CrowdFunding = createContext();

const initialState = {
  totalPrice: 89914,
  maxPrice: 100000,
  name: "",
  totalBackers: 5007,
  data: data,
};

function reducer(state, action) {
  switch (action.type) {
    case "confirm": {
      const newData = state.data.map((s) => {
        if (s.name === action.payload.name) {
          return {
            ...s,
            StockLeft: s.StockLeft - 1,
          };
        }
        return s;
      });

      return {
        ...state,
        totalPrice: action.payload.amount + state.totalPrice,
        name: action.payload.opens,
        totalBackers: state.totalBackers + 1,
        data: newData,
      };
    }
    case "pledge": {
      console.log(action);
      const newData = state.data.map((s) => {
        if (s.name === action.payload.name) {
          return {
            ...s,
            StockLeft: s.StockLeft - 1,
          };
        }
        return s;
      });

      return {
        ...state,
        totalPrice: Number(action.payload.amount) + state.totalPrice,
        name: action.payload.opens,
        totalBackers: state.totalBackers + 1,
        data: newData,
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
  const [{ totalPrice, maxPrice, name, totalBackers, data }, dispatch] =
    useReducer(reducer, initialState);
  return (
    <CrowdFunding.Provider
      value={{ maxPrice, totalPrice, name, totalBackers, data, dispatch }}
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
