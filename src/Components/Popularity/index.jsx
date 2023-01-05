import { Button } from "../Button";
import { listPhotosPopularity } from "./listPhotosPopularity";

import styles from "./Popularity.module.scss";

export function Popularity() {
  return (
    <aside className={styles.popularity}>
      <h2>Populares</h2>
      <ul className={styles.popularity__images}>
        {listPhotosPopularity.map((photo) => {
          return (
            <li key={photo.id}>
              <img src={photo.path} alt={photo.alt} />
            </li>
          );
        })}
      </ul>
      <Button>Ver mais fotos</Button>
    </aside>
  );
}
