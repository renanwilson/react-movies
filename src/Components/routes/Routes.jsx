import { Route, BrowserRouter, Routes } from "react-router-dom";

import { Index } from "pages/Index/Index";
import { TopRated } from "pages/TopRated";

export const ForRotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Index />} path="/" />
        <Route element={<TopRated />} path="/top" />
      </Routes>
    </BrowserRouter>
  );
};
