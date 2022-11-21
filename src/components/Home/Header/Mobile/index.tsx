import { useState } from "react";
import { NavigationDrawer } from "./NavigationDrawer";

import styles from "./styles.module.scss";
export function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <header className={styles.headerContainer}>
        <a onClick={handleOpenMenu}>
          <img src="/images/hamburguer.svg" alt="" />
        </a>
        <img src="/images/logoHostHunter.png" alt="" />
        <img src="/images/personMobile.svg" alt="" />
      </header>
      <NavigationDrawer isOpen={isMenuOpen} handleClose={handleCloseMenu} />
    </>
  );
}
