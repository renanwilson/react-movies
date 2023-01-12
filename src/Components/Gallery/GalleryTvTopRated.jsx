import { GalleryContainer } from "./Container/index";

import { TvTopRatedHOC } from "HOC/TvTopRatedHOC";
import { useTvTopRatedContext } from "contexts/TvTopRatedContext";

function Gallery() {
  const { data } = useTvTopRatedContext();

  return <GalleryContainer data={data} title="TopRated na tv" />;
}

export const GalleryWithTvTopRated = () => TvTopRatedHOC(Gallery);
