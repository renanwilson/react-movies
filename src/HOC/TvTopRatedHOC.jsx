import { TvTopRatedContextProvider } from "contexts/TvTopRatedContext";

export const TvTopRatedHOC = (Children) => {
  return (
    <TvTopRatedContextProvider>
      <Children />
    </TvTopRatedContextProvider>
  );
};
