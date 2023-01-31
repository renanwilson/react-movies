import { GalleryContainer } from "./Container/index";

import { TopRatedHOC } from "HOC/TopRatedHOC";
import { useTopRatedContext } from "contexts/TopRatedContext";

function Gallery() {
  const { data } = useTopRatedContext();

  return <GalleryContainer data={data} title="Melhores avaliados" />;
}

export const GalleryWithTopRated = () => TopRatedHOC(Gallery);
