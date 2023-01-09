import { NowPlayingContextProvider } from "contexts/NowPlaying";

export const NowPlayingHOC = (Children) => {
  return (
    <NowPlayingContextProvider>
      <Children />
    </NowPlayingContextProvider>
  );
};