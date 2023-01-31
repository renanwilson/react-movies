import React from "react";
import { List } from "./List";
import styles from "./Menu.module.scss";

export function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        {List.map((list) => {
          return (
            <li key={list.title} className={styles.menu__item}>
              <img src={list.img} alt={list.title} />
              <a href={list.href}>{list.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
