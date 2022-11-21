import { Envelope, InstagramLogo, Phone } from "phosphor-react";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./styles.module.scss";

export function CompanyFooter() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.backgroundFooter}>
          <div className={styles.content}>
            <div className={styles.footerDescription}>
              <div className={styles.leftSideFooter}>
                <h3>
                  <span style={{ color: "#f4c648" }}>Obrigado</span> por visitar
                  o nosso site, sinta-se livre para entrar em contato conosco!
                </h3>
              </div>
              <div className={styles.rightSide}>
                <div className={styles.firstBlock}>
                  <span style={{ color: "#f4c648" }}>Mapa do site</span>
                  <ul>
                    <li>Home</li>
                    <li>Serviços</li>
                    <li>Game Solutions</li>
                    <li>Empresa</li>
                  </ul>
                </div>
                <div className={styles.secondBlock}>
                  <span
                    className={styles.footerMenuTitle}
                    style={{ color: "#f4c648" }}
                  >
                    Contatos
                  </span>
                  <div className={styles.socialBlock}>
                    <div className={styles.social}>
                      <InstagramLogo size={16} weight="fill" />
                      <p>@HostHunter</p>
                    </div>
                    <div className={styles.social}>
                      <Phone size={16} weight="fill" />
                      <p>(11) 99269-9999</p>
                    </div>
                    <div className={styles.social}>
                      <Phone size={16} weight="fill" />
                      <p>(11) 99269-9999</p>
                    </div>
                    <div className={styles.social}>
                      <Envelope size={16} weight="fill" />
                      <p>HostHunter@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
