import React, { createContext, useContext, useState, useEffect } from "react";
import { api } from "services/api";

const INITIAL_STATE = {
  data: [],
};
const TvTopRatedContext = createContext(INITIAL_STATE);

export const useTvTopRatedContext = () => useContext(TvTopRatedContext);

export const TvTopRatedContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("tv/top_rated").then((resp) => {
      setData(resp.data.results);
    });
  }, [setData]);

  return (
    <TvTopRatedContext.Provider value={{ data, setData }}>
      {children}
    </TvTopRatedContext.Provider>
  );
};
