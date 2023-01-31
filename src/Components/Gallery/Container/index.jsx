import { Cards } from "../Cards";
import styles from "./Gallery.module.scss";

export function GalleryContainer({ data, title }) {
  return (
    <section className={styles.gallery}>
      <h2> {title} </h2>
      <ul className={styles.gallery__cards}>
        <Cards Photos={data} styles={styles} />
      </ul>
    </section>
  );
}
