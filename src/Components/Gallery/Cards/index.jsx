import { CircularProgress } from "Components/CircularProgress";
import React from "react";

export function Cards({ Photos, styles }) {
  const urlImages = "https://image.tmdb.org/t/p/w300";

  return (
    <>
      {Photos.map(({ poster_path, title, vote_average, id }) => {
        return (
          <li className={styles.gallery__card} key={id}>
            <img
              className={styles.gallery__image}
              src={`${urlImages}/${poster_path}`}
              alt={title}
            />
            <div className={styles.card__circular}>
              <CircularProgress
                text={`${vote_average?.toFixed(1)} %`}
                value={vote_average}
              />
            </div>
          </li>
        );
      })}
    </>
  );
}
