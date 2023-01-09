import React, { createContext, useContext, useState, useEffect } from "react";
import { api } from "services/api";

const INITIAL_STATE = {
  data: [],
};
const MostPopularityContext = createContext(INITIAL_STATE);

export const useMostPopularityContext = () => useContext(MostPopularityContext);

export const MostPopularityContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("movie/popular").then((resp) => {
      setData(resp.data.results);
    });
  }, [setData]);

  return (
    <MostPopularityContext.Provider value={{ data, setData }}>
      {children}
    </MostPopularityContext.Provider>
  );
};
