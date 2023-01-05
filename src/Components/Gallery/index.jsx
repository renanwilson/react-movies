import { Cards } from "./Cards";
import styles from "./Gallery.module.scss";

export function Gallery({ data }) {
  return (
    <section className={styles.galeria}>
      <h2> Mais populares </h2>
      <ul className={styles.galeria__cards}>
        <Cards Photos={data} styles={styles} />
      </ul>
    </section>
  );
}
