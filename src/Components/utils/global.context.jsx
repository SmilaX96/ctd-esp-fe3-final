import { createContext, useReducer } from "react";
import { useContext, useState,useEffect } from "react";
import { reducer } from "./reducer";
import axios from "axios";

export const DentistaStates = createContext();

const favs =[]
const initialState = {
  theme: "light",
  favs: JSON.parse(localStorage.getItem('favs')) || [],
  list: [],
  dentistaSelected: [],
}

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [theme, setTheme] = useState(initialState.theme);

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        dispatch({ type:'GET_LIST', payload: res.data.list });
      });
  }, []);

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favs))
  }, [state,favs]);
 
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <DentistaStates.Provider value={{ theme, toggleTheme, state, dispatch }}>
      {children}
    </DentistaStates.Provider>
  );
};

export const useDentistaStates = () => useContext(DentistaStates);

export default ContextProvider;
