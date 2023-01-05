import { Header } from "Components/Header/Index";
import { Menu } from "Components/Menu/Index";
import banner from "assets/banner.png";
import styles from "./Index.module.scss";
import { Gallery } from "../../Components/Gallery";
import { Popularity } from "Components/Popularity";
import { useEffect, useState } from "react";
import { api } from "services/api";

export function Index() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("movie/now_playing").then((resp) => {
      setData(resp.data.results);
    });
  }, [setData]);

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
          <Gallery data={data} />
        </div>
      </main>
    </>
  );
}
