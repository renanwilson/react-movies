import React, { createContext, useContext, useState, useEffect } from "react";
import { api } from "services/api";

const INITIAL_STATE = {
  data: [],
};
const NowPlayingContext = createContext(INITIAL_STATE);

export const useNowPlayingContext = () => useContext(NowPlayingContext);

export const NowPlayingContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("trending/all/week").then((resp) => {
      setData(resp.data.results);
    });
  }, [setData]);

  return (
    <NowPlayingContext.Provider value={{ data, setData }}>
      {children}
    </NowPlayingContext.Provider>
  );
};
