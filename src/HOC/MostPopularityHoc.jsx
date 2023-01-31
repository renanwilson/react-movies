import { MostPopularityContextProvider } from "contexts/MostPopularityContext";

export const MostPopularityHOC = (Children) => {
  return (
    <MostPopularityContextProvider>
      <Children />
    </MostPopularityContextProvider>
  );
};
