import Link from "next/link";
import PersonIconMobile from "../../../../../Icons/PersonIconMobile";

import styles from "./styles.module.scss";

interface NavigationDrawerProps {
  isOpen: boolean;
  handleClose: () => void;
}

export function NavigationDrawer({
  isOpen,
  handleClose,
}: NavigationDrawerProps) {
  return (
    <>
      <div
        className={`${styles.navigationOverlay} ${isOpen ? "active" : ""}`}
        onClick={handleClose}
      ></div>
      <div className={`${styles.drawerMenu} ${isOpen ? "active" : ""}`}>
        <div className={styles.content}>
          <img src="/images/logoHostHunter.png" alt="" />
          <div className={styles.divisor}></div>
          <div className={styles.navigationSection}>
            <Link href={"/"}>
              <a style={{ fontWeight: "bold" }}>Cloud Storage Drive</a>
            </Link>
            <Link href={"/"}>
              <a>Servidores e Coloations</a>
            </Link>
            <Link href={"/"}>
              <a>VPS Cloud</a>
            </Link>
            <Link href={"/"}>
              <a>Soluções Corporativas</a>
            </Link>
            <Link href={"/"}>
              <a>Registrar Domínio</a>
            </Link>
            <Link href={"/"}>
              <a>HostHunter</a>
            </Link>
          </div>
          <div className={styles.divisor}></div>

          <div className={styles.wishSection}>
            <div className={styles.itemsContainer}>
              <PersonIconMobile />
              Perfil
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
