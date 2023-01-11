import React, { createContext, useContext, useState, useEffect } from "react";
import { api } from "services/api";

const INITIAL_STATE = {
  data: [],
};
const TvPopularContext = createContext(INITIAL_STATE);

export const useTvPopularContext = () => useContext(TvPopularContext);

export const TvPopularContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("tv/popular").then((resp) => {
      setData(resp.data.results);
    });
  }, [setData]);

  return (
    <TvPopularContext.Provider value={{ data, setData }}>
      {children}
    </TvPopularContext.Provider>
  );
};
