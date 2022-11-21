import { useState } from "react";
import MenuHamburguer from "../../../../Icons/MenuHamburguer";
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
          <MenuHamburguer />
        </a>
        <img src="/images/logoHostHunter.png" alt="" />
        <img src="/images/personMobile.svg" alt="" />
      </header>
      <NavigationDrawer isOpen={isMenuOpen} handleClose={handleCloseMenu} />
    </>
  );
}
