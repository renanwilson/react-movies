import { Cards } from "./Cards";
import styles from "./Gallery.module.scss";

export function Gallery({ data }) {
  return (
    <section className={styles.gallery}>
      <h2> Mais populares </h2>
      <ul className={styles.gallery__cards}>
        <Cards Photos={data} styles={styles} />
      </ul>
    </section>
  );
}
