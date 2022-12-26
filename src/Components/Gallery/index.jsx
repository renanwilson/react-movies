import { useState } from "react";
import { Tags } from "../Tags";
import { Cards } from "./Cards";
import styles from "./Gallery.module.scss";
import Photos from "./Photos.json";

export function Gallery() {
  const [items, setItems] = useState(Photos);
  const tags = [...new Set(Photos.map((photos) => photos.tag))];

  const filterPhotos = (tag) => {
    const newPhotos = Photos.filter((photo) => {
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
