import { Header } from "Components/Header/Index";
import { Menu } from "Components/Menu/Index";
import banner from "assets/banner.png";
import styles from "./Index.module.scss";
import Footer from "Components/Footer";
import { Gallery } from "../../Components/Gallery";
import { Popularity } from "Components/Popularity";

export function Index() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.principal}>
          <Menu />

          <div className={styles.principal__imagem}>
            <h1>A galeria mais completa do espaco</h1>
            <img src={banner} alt="A imagem da terra vista do espaco" />
          </div>
        </section>
        <div className={styles.galeria}>
          <Gallery />
          <Popularity />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
