import styles from "./Button.module.scss";

export function Button({ children }) {
  return <button style={styles.button}>{children}</button>;
}
