import { GalleryContainer } from "./Container/index";

import { useSearchContext } from "contexts/SearchContext";

export function Gallery() {
  const { data, query } = useSearchContext();

  return <GalleryContainer data={data} title={`Resultados para '${query}'`} />;
}
