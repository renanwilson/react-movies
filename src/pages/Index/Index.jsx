import { Header } from "Components/Header/Index";
import { Menu } from "Components/Menu/Index";

import styles from "styles/PageStyles.module.scss";
import { Urls } from "constants/Urls";
import { GalleryWithNowPlaying } from "Components/Gallery/GalleryNowPlaying";
import { AiFillStar } from "react-icons/ai";
import { getImageFromApi } from "utils/getImageFromApi";

export function Index() {
  const { data } = getImageFromApi("trending/all/week");

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

            <h1>{data.title ? data.title : data.name}</h1>
            <h2>
              <AiFillStar color="#D4AF37" /> {data.vote_average?.toFixed(1)}
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
