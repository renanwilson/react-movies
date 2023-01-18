import { useSearchContext } from "contexts/SearchContext";
import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.png";
import search from "./assets/search.png";
import styles from "./Header.module.scss";
import { api } from "services/api";
import { useGetQuery } from "utils/getQuery";

export function Header() {
  const { setQuery, query } = useSearchContext();
  const { getQuery, useGetQueryButton } = useGetQuery();

  return (
    <>
      <header className={styles.header}>
        <img src={logo} alt="logo" />
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
