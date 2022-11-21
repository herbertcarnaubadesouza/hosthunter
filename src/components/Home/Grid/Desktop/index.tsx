import styles from "./styles.module.scss";

export function DesktopGrid() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.title}>
          <h2>Se ainda tem dúvidas de uma olhada você mesmo</h2>
          <p>Empresas que confiam em nosso produto</p>
        </div>
        <div className={styles.gridContainer}>
          <div className={styles.ilustracao}>
            <img src="/images/ilustracao2.png" alt="" />
          </div>
          <div className={styles.gridContent}>
            <div className={styles.testimonialMasonryFirstRow}>
              <div className={`wide ${styles.depoiment}`}>
                <div className={styles.userInfo}>
                  <img src="/images/cliente1.png" alt="" />
                  <img src="/images/estrelas.png" alt="" />
                </div>
                <div className={styles.contentText}>
                  <p>
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industrys standard dummy
                    text ever since the 1500s
                  </p>
                  <p className={styles.clientName}>Jeff Colinn</p>
                </div>
              </div>
              <div className={`thin ${styles.depoiment}`}>
                <div className={styles.userInfo}>
                  <img src="/images/cliente2.png" alt="" />
                  <img src="/images/estrelas.png" alt="" />
                </div>
                <div className={styles.contentText}>
                  <p>
                    is simply dummy text of the printing and typesetting
                    industry.
                  </p>
                  <p className={styles.clientName}>Jeff Colinn</p>
                </div>
              </div>
            </div>
            <div className={styles.testimonialMasonrySecondRow}>
              <div className={`wide ${styles.depoiment}`}>
                <div className={styles.userInfo}>
                  <img src="/images/cliente3.png" alt="" />
                  <img src="/images/estrelas.png" alt="" />
                </div>
                <div className={styles.contentText}>
                  <p>
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industrys standard dummy
                    text ever since the 1500s
                  </p>
                  <p className={styles.clientName}>Jeff Colinn</p>
                </div>
              </div>
              <div className={`thin ${styles.depoiment}`}>
                <div className={styles.userInfo}>
                  <img src="/images/cliente4.png" alt="" />
                  <img src="/images/estrelas.png" alt="" />
                </div>
                <div className={styles.contentText}>
                  <p>
                    is simply dummy text of the printing and typesetting
                    industry.
                  </p>
                  <p className={styles.clientName}>Jeff Colinn</p>
                </div>
              </div>
            </div>
            <div className={styles.testimonialMasonryThirdRow}>
              <div className={`wide ${styles.depoiment}`}>
                <div className={styles.userInfo}>
                  <img src="/images/cliente5.png" alt="" />
                  <img src="/images/estrelas.png" alt="" />
                </div>
                <div className={styles.contentText}>
                  <p>
                    is simply dummy text of the printing and typesetting
                    industry.
                  </p>
                  <p className={styles.clientName}>Jeff Colinn</p>
                </div>
              </div>
              <div className={`thin ${styles.depoiment}`}>
                <div className={styles.userInfo}>
                  <img src="/images/cliente6.png" alt="" />
                  <img src="/images/estrelas.png" alt="" />
                </div>
                <div className={styles.contentText}>
                  <p>
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industrys standard dummy
                    text ever since the 1500s
                  </p>
                  <p className={styles.clientName}>Jeff Colinn</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
