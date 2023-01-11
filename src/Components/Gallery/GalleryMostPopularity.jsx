import { GalleryContainer } from "./Container/index";

import { useMostPopularityContext } from "contexts/MostPopularityContext";
import { MostPopularityHOC } from "HOC/MostPopularityHoc";

function Gallery() {
  const { data } = useMostPopularityContext();

  return <GalleryContainer data={data} title="Mais populares" />;
}

export const GalleryWithMostPopularity = () => MostPopularityHOC(Gallery);
