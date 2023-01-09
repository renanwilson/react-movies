import { MostPopularityContextProvider } from "contexts/MostPopularity";

export const MostPopularityHOC = (Children) => {
  return (
    <MostPopularityContextProvider>
      <Children />
    </MostPopularityContextProvider>
  );
};
