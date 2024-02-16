import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.navigationContainer}>
      <ul className={styles.uList}>
        <li>PLAYLIST</li>

        <li>UPLOAD</li>
      </ul>
    </nav>
  );
}

export default NavBar;
