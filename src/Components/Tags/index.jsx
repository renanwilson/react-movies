import styles from "./Tags.module.scss";
import Photos from "../Gallery/Photos.json";
export function Tags({ tags, filterPhotos, setItems }) {
  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__lista}>
        {tags.map((tag) => (
          <li key={tag} onClick={() => filterPhotos(tag)}>
            {tag}
          </li>
        ))}
        <li onClick={() => setItems(Photos)}>Todos</li>
      </ul>
    </div>
  );
}
