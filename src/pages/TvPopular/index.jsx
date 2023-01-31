import { Header } from "Components/Header/Index";
import { Menu } from "Components/Menu/Index";

import styles from "styles/PageStyles.module.scss";
import { getImageFromApi } from "utils/getImageFromApi";
import { Urls } from "constants/Urls";
import { AiFillStar } from "react-icons/ai";
import { GalleryWithTvPopular } from "Components/Gallery/GalleryTvPopular";

export function TvPopular() {
  const { data } = getImageFromApi("tv/popular");
  return (
    <>
      <Header />
      <main>
        <section className={styles.principal}>
          <Menu />

          <div className={styles.principal__image}>
            <img
              src={`${Urls.IMAGE_FULL_WIDTH}/${data.backdrop_path}`}
              alt="A imagem da terra vista do espaco"
            />
            <h1>{data.name}</h1>
            <h2>
              <AiFillStar color="#D4AF37" /> {data.vote_average}
            </h2>
          </div>
        </section>
        <div className={styles.gallery}>
          <GalleryWithTvPopular />
        </div>
      </main>
    </>
  );
}
