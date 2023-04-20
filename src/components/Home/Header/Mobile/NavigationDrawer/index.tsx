import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./styles.module.scss";

interface NavigationDrawerProps {
  isOpen: boolean;
  handleClose: () => void;
}

export function NavigationDrawer({
  isOpen,
  handleClose,
}: NavigationDrawerProps) {
  const router = useRouter();

  return (
    <>
      <div
        className={`${styles.navigationOverlay} ${isOpen ? "active" : ""}`}
        onClick={handleClose}
      ></div>
      <div className={`${styles.drawerMenu} ${isOpen ? "active" : ""}`}>
        <div className={styles.content}>
          <Link href="/">
            <img src="/images/logoHostHunter.png" alt="" />
          </Link>
          <div className={styles.divisor}></div>
          <div className={styles.navigationSection}>
            <Link href="/cloud-storage-drive">
              <a
                className={
                  router.pathname === "/cloud-storage-drive"
                    ? `${styles.navigation} active`
                    : styles.navigation
                }
              >
                Cloud Storage Drive
              </a>
            </Link>
            <Link href="/server">
              <a
                className={
                  router.pathname === "/server"
                    ? `${styles.navigation} active`
                    : styles.navigation
                }
              >
                Servidores e Coloations
              </a>
            </Link>
            <Link href="/vps-cloud">
              <a
                className={
                  router.pathname === "/vps-cloud"
                    ? `${styles.navigation} active`
                    : styles.navigation
                }
              >
                VPS Cloud
              </a>
            </Link>
            <Link href="/solucoes-corporativas">
              <a
                className={
                  router.pathname === "/solucoes-corporativas"
                    ? `${styles.navigation} active`
                    : styles.navigation
                }
              >
                Soluções Corporativas
              </a>
            </Link>
            <Link href="/company">
              <a
                className={
                  router.pathname === "/company"
                    ? `${styles.navigation} active`
                    : styles.navigation
                }
              >
                HostHunter
              </a>
            </Link>
          </div>
          <div className={styles.divisor}></div>

          <div className={styles.wishSection}>
            <div className={styles.itemsContainer}>
              <img src="/images/personMobile.svg" alt="" />
              Perfil
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
