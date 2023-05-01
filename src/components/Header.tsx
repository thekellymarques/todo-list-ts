import styles from "./Header.module.css";
import logoImg from "../assets/logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoImg} alt="logoImg" />
      <span className={styles.todoTo}>to</span>
      <span className={styles.todoDo}>do</span>
    </header>
  );
}
