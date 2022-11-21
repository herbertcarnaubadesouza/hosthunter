import Link from "next/link";
import { useRouter } from "next/router";
import PersonIcon from "../../../../Icons/PersonIcon";
import styles from "./styles.module.scss";

export function DesktopHeader() {
  const router = useRouter();
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerActions}>
          <div className="container">
            <div className={styles.logo}>
              <img src="/images/logoHostHunter.png" alt="" />
            </div>
            <nav aria-label="Principal" className={styles.navLinks}>
              <Link href={"/"}>
                <a className={router.pathname === "/" ? "active" : ""}>
                  Serviços
                </a>
              </Link>
              <Link href={"/produtos"}>
                <a className={router.pathname === "/produtos" ? "active" : ""}>
                  Gaming Solutions
                </a>
              </Link>
              <Link href={"/social"}>
                <a className={router.pathname === "/social" ? "active" : ""}>
                  Empresa
                </a>
              </Link>
            </nav>
            <div className={styles.icon}>
              <PersonIcon />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
