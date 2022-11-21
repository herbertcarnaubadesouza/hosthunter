import styles from "./styles.module.scss";

export function VpsCloudBanner() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.titleWrapper}>
            <div className={styles.leftSide}>
              <img src="/images/firstaspas.png" alt="" />
              <div className={styles.title}>
                <h1>VPS Cloud</h1>
                <h2>
                  A melhor infraestrutura do Brasil de serviços VPS com proteção
                  DDoS premium para garantir a melhor experiência do usuário.
                </h2>
              </div>
            </div>
            <div className={styles.rightSide}>
              <img src="/images/secondaspas.png" alt="" />
            </div>
          </div>
          <div className={styles.tedBanner}>
            <img src="/images/ted-vps.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
