import Link from "next/link";
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
        <Link href="/">
          <img src="/images/logoHostHunter.png" alt="" />
        </Link>
        <img src="/images/personMobile.svg" alt="" />
      </header>
      <NavigationDrawer isOpen={isMenuOpen} handleClose={handleCloseMenu} />
    </>
  );
}
