import { useSearchContext } from "contexts/SearchContext";

import search from "./assets/search.png";
import styles from "./Header.module.scss";

import { useGetQuery } from "utils/getQuery";

export function Header() {
  const { setQuery, query } = useSearchContext();
  const { getQuery, useGetQueryButton } = useGetQuery();

  return (
    <>
      <header className={styles.header}>
        <img
          src="https://fontmeme.com/permalink/230131/f16ef94af37ba1715639ec01e294036b.png"
          alt="logo"
        />
        <div className={styles.header__container}>
          <input
            type="text"
            placeholder="O que voce procura?"
            className={styles.header__input}
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={getQuery}
          />
          <img
            src={search}
            alt="Lupa"
            onClick={useGetQueryButton}
            value={query}
          />
        </div>
      </header>
    </>
  );
}
