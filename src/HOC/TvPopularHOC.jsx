import { TvPopularContextProvider } from "contexts/TvPopularContext";

export const TvPopularHOC = (Children) => {
  return (
    <TvPopularContextProvider>
      <Children />
    </TvPopularContextProvider>
  );
};
