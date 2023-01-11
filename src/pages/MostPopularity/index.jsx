import { Header } from "Components/Header/Index";
import { Menu } from "Components/Menu/Index";
import banner from "assets/banner.png";
import styles from "./MostPopularity.module.scss";

import { GalleryWithMostPopularity } from "Components/Gallery/GalleryMostPopularity";

export function MostPopularity() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.principal}>
          <Menu />

          <div className={styles.principal__image}>
            <h1>A galeria mais completa do espaco</h1>
            <img src={banner} alt="A imagem da terra vista do espaco" />
          </div>
        </section>
        <div className={styles.gallery}>
          <GalleryWithMostPopularity />
        </div>
      </main>
    </>
  );
}
