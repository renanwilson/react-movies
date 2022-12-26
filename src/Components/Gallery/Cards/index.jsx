import open from "./open.png";
import favorito from "./favorito.png";

export function Cards({ Photos, styles }) {
  return (
    <>
      {Photos.map(({ id, imagem, creditos, tag, titulo }) => {
        return (
          <li key={id} className={styles.galeria__card}>
            <img className={styles.galeria__imagem} src={imagem} alt={titulo} />
            <p className={styles.galeria__descricao}>{titulo}</p>
            <div>
              <p>{creditos}</p>
              <span>
                <img src={open} alt="Icone coracao curtir" />
                <img src={favorito} alt="Icone de abrir modal" />
              </span>
            </div>
          </li>
        );
      })}
    </>
  );
}
