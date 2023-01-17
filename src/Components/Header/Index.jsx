import { useSearchContext } from "contexts/SearchContext";
import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.png";
import search from "./assets/search.png";
import styles from "./Header.module.scss";
import { api } from "services/api";

export function Header() {
  const { setQuery, query, setData } = useSearchContext();
  const navigate = useNavigate();

  const useGetQuery = (event) => {
    if (event.key === "Enter") {
      api.get("search/movie", { params: { query: query } }).then((resp) => {
        setData(resp.data.results);
      });
      navigate("/search");
    }
  };
  const useGetQueryButton = () => {
    api.get("search/movie", { params: { query: query } }).then((resp) => {
      setData(resp.data.results);
    });
    navigate("/search");
  };
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
            onKeyPress={useGetQuery}
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
