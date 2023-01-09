import { Cards } from "./Cards";
import styles from "./Gallery.module.scss";

import { useMostPopularityContext } from "contexts/MostPopularity";
import { MostPopularityHOC } from "HOC/MostPopularityHoc";

function Gallery() {
  const { data } = useMostPopularityContext();

  return (
    <section className={styles.gallery}>
      <h2> Mais populares </h2>
      <ul className={styles.gallery__cards}>
        <Cards Photos={data} styles={styles} />
      </ul>
    </section>
  );
}

export const GalleriWithMostPopularity = () => MostPopularityHOC(Gallery);
