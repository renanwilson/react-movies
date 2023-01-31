import { Header } from "Components/Header/Index";
import { Menu } from "Components/Menu/Index";

import styles from "styles/PageStyles.module.scss";
import { getImageFromApi } from "utils/getImageFromApi";
import { Urls } from "constants/Urls";
import { AiFillStar } from "react-icons/ai";
import { GalleryWithTopRated } from "Components/Gallery/GalleryTopRated";

export function TopRated() {
  const { data } = getImageFromApi("movie/top_rated");
  console.log(data);
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
            <h1>{data.title}</h1>
            <h2>
              <AiFillStar color="#D4AF37" /> {data.vote_average}
            </h2>
          </div>
        </section>
        <div className={styles.gallery}>
          <GalleryWithTopRated />
        </div>
      </main>
    </>
  );
}
