import React, { createContext, useContext, useState, useEffect } from "react";
import { api } from "services/api";

const INITIAL_STATE = {
  data: [],
};
const TopRatedContext = createContext(INITIAL_STATE);

export const useTopRatedContext = () => useContext(TopRatedContext);

export const TopRatedContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("movie/top_rated").then((resp) => {
      setData(resp.data.results);
    });
  }, [setData]);

  return (
    <TopRatedContext.Provider value={{ data, setData }}>
      {children}
    </TopRatedContext.Provider>
  );
};
