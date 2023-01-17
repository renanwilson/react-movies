import React, { createContext, useContext, useState } from "react";

const INITIAL_STATE = {
  data: [],
  setQuery: () => "",
  query: "",
};
const SearchContext = createContext(INITIAL_STATE);

export const useSearchContext = () => useContext(SearchContext);

export const SearchContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  return (
    <SearchContext.Provider value={{ data, setQuery, query, setData }}>
      {children}
    </SearchContext.Provider>
  );
};
