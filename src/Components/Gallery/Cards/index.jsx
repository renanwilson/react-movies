import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export function Cards({ Photos, styles }) {
  const urlImages = "https://image.tmdb.org/t/p/w300";

  return (
    <>
      {Photos.map(({ poster_path, title, id, vote_average }) => {
        return (
          <li className={styles.gallery__card}>
            <img
              key={id}
              className={styles.gallery__image}
              src={`${urlImages}/${poster_path}`}
              alt={title}
            />
            <div className={styles.card__circular}>
              <CircularProgressbar
                value={vote_average}
                text={vote_average}
                maxValue={10}
              />
            </div>
          </li>
        );
      })}
    </>
  );
}
