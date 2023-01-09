import { NowPlayingContextProvider } from "contexts/NowPlayingContext";

export const NowPlayingHOC = (Children) => {
  return (
    <NowPlayingContextProvider>
      <Children />
    </NowPlayingContextProvider>
  );
};
