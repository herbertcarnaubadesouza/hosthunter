import styles from "./styles.module.scss";

export function About() {
  return (
    <>
      <section className="container">
        <div className={styles.allContent}>
          <div className={styles.title}>
            <h2>Cresça com a HostHunter</h2>
            <p>Conheça mais sobre a nossa empresa.</p>
          </div>
          <div className={styles.aboutContent}>
            <div className={`${styles.contentBox} first`}>
              <h2>Melhor proteção DDoS do mercado nacional</h2>
              <p>com foco em seu negócio, seja corporativo ou gaming</p>
            </div>
          </div>
          <div className={styles.aboutContent}>
            <div className={styles.contentBox}>
              <h2>
                Servidores de alto desempenho<br></br> e customizado
              </h2>
              <p>
                Nascemos da vontade de romper com um mercado tradicional e cheio
                de vícios.
              </p>
            </div>
          </div>
          <div className={styles.aboutContent}>
            <div className={`${styles.contentBox} third`}>
              <h2>Garantia de uptime</h2>
              <p>
                Garantia de uptime de 99,98% para toda nossa infra-estrutura.
              </p>
            </div>
          </div>
          <div className={styles.aboutContent}>
            <div className={`${styles.contentBox} fourth`}>
              <h2>Suporte disponível 24/7</h2>
              <p>Prontos para atender a tua solicitação ou dificuldade.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
