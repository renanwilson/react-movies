import { Header } from "Components/Header/Index";
import { Menu } from "Components/Menu/Index";

import styles from "./Index.module.scss";
import { GalleryWithNowPlaying } from "Components/Gallery/GalleryNowPlaying";
import { api } from "services/api";
import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";

export function Index() {
  const [data, setData] = useState([]);
  useEffect(() => {
    api.get("movie/popular").then((resp) => {
      setData(resp.data.results[1]);
    });
  }, [setData]);

  const urlImages = "https://image.tmdb.org/t/p/t/p/w1920_and_h800_multi_faces";

  return (
    <>
      <Header />
      <main>
        <section className={styles.principal}>
          <Menu />

          <div className={styles.principal__image}>
            <img
              src={`${urlImages}/${data.backdrop_path}`}
              alt="A imagem da terra vista do espaco"
            />
            <h1>{data.title}</h1>
            <h2>
              <AiFillStar color="#D4AF37" /> {data.vote_average}
            </h2>
          </div>
        </section>
        <div className={styles.gallery}>
          <GalleryWithNowPlaying />
        </div>
      </main>
    </>
  );
}
