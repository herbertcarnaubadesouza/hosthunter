import styles from "./styles.module.scss";

export function CloudBanner() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.titleWrapper}>
          <div className={styles.leftSide}>
            <img src="/images/firstaspas.png" alt="" />
            <div className={styles.title}>
              <h1>Cloud Storage Drive</h1>
              <h2>
                Realize rotinas de backups de forma segura na nossa cloud de
                todos os dados da sua infraestrutura, e garanta que estes dados
                possam ser restaurados a qualquer momento.
              </h2>
            </div>
          </div>
          <div className={styles.rightSide}>
            <img src="/images/secondaspas.png" alt="" />
          </div>
        </div>
        <div className={styles.tedBanner}>
          <img src="/images/ted-cloud.png" alt="" />
        </div>
      </section>
    </>
  );
}
