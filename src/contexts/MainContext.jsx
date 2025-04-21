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
  bookmarked: false,
  isSidebarOpen: false,
  value: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "confirm": {
      return {
        ...state,

        name: action.payload.opens,
        value: action.payload.name,
        isSidebarOpen: false,
      };
    }
    case "pledge": {
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
        value: action.payload.name,
        totalBackers: state.totalBackers + 1,
        data: newData,
        isSidebarOpen: false,
      };
    }
    case "bookmark": {
      return {
        ...state,
        bookmarked: !state.bookmarked,
      };
    }
    case "clearName": {
      return {
        ...state,
        name: "",
      };
    }
    case "closeSidebar": {
      return {
        ...state,
        isSidebarOpen: false,
      };
    }
    case "sidebar": {
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };
    }
  }
}

function MainContextPage({ children }) {
  const [
    {
      totalPrice,
      maxPrice,
      name,
      totalBackers,
      data,
      bookmarked,
      value,
      isSidebarOpen,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  return (
    <CrowdFunding.Provider
      value={{
        maxPrice,
        totalPrice,
        value,
        name,
        totalBackers,
        data,
        bookmarked,
        isSidebarOpen,
        dispatch,
      }}
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
