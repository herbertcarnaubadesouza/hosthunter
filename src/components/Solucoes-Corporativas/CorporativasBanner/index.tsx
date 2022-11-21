import styles from "./styles.module.scss";

export function CorporativasBanner() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.titleWrapper}>
          <div className={styles.leftSide}>
            <img src="/images/firstaspas.png" alt="" />
            <div className={styles.title}>
              <h1>Soluções corporativas</h1>
              <h2>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industrys standard dummy text ever
                since the 1500s
              </h2>
            </div>
          </div>
          <div className={styles.rightSide}>
            <img src="/images/secondaspas.png" alt="" />
          </div>
        </div>
        <div className={styles.tedBanner}>
          <img src="/images/ted-corporativa.png" alt="" />
        </div>
      </section>
    </>
  );
}
