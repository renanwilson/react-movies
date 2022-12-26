import logo from "./assets/logo.png";
import search from "./assets/search.png";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <img src={logo} alt="logo" />
        <div className={styles.header__container}>
          <input
            type="text"
            placeholder="O que voce procura?"
            className={styles.header__input}
          />
          <img src={search} alt="Lupa" />
        </div>
      </header>
    </>
  );
}
