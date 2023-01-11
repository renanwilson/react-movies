import { GalleryContainer } from "./Container/index";

import { TvPopularHOC } from "HOC/TvPopularHOC";
import { useTvPopularContext } from "contexts/TvPopularContext";

function Gallery() {
  const { data } = useTvPopularContext();

  return <GalleryContainer data={data} title="Popular na tv" />;
}

export const GalleryWithTvPopular = () => TvPopularHOC(Gallery);
