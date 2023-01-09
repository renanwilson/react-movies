import { TopRatedContextProvider } from "contexts/TopRatedContext";

export const TopRatedHOC = (Children) => {
  return (
    <TopRatedContextProvider>
      <Children />
    </TopRatedContextProvider>
  );
};
