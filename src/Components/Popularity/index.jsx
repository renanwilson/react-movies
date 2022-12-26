import { Button } from "../Button";
import photosPopularity from "./photosPopularity.json";
import styles from "./Popularity.module.scss";

export function Popularity() {
  return (
    <aside className={styles.populares}>
      <h2>Populares</h2>
      <ul className={styles.populares__imagens}>
        {photosPopularity.map((photo) => {
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
