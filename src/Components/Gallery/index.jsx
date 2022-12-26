import { useState } from "react";
import { Tags } from "../Tags";
import { Cards } from "./Cards";
import styles from "./Gallery.module.scss";
import { ListPhotos } from "./ListPhotos";

export function Gallery() {
  const [items, setItems] = useState(ListPhotos);
  const tags = [...new Set(ListPhotos.map((photos) => photos.tag))];

  const filterPhotos = (tag) => {
    const newPhotos = ListPhotos.filter((photo) => {
      return photo.tag === tag;
    });
    setItems(newPhotos);
  };
  return (
    <section className={styles.galeria}>
      <h2> Navegue pela galeria </h2>
      <Tags tags={tags} filterPhotos={filterPhotos} setItems={setItems} />
      <ul className={styles.galeria__cards}>
        <Cards styles={styles} Photos={items} />
      </ul>
    </section>
  );
}
