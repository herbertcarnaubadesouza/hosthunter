import styles from "./styles.module.scss";

export function GameSolutionsBanner() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.titleContainer}>
            <div className={styles.title}>
              <img src="/images/firstaspas.png" alt="" />
              <h1>Games Solutions</h1>
              <img
                className={styles.rotate}
                src="/images/secondaspas.png"
                alt=""
              />
            </div>
            <div className={styles.bannerContent}>
              <p>
                Realize rotinas de backups de forma segura na nossa cloud de
                todos os dados da sua infraestrutura, e garanta que estes dados
                possam ser restaurados a qualquer momento.
              </p>
            </div>
          </div>
          <div className={styles.tedContainer}>
            <ul>
              <li>Infraestrutura redundantes</li>
              <li>Proteção DDOS Premium </li>
              <li>Serviçoes com alto desempenho</li>
              <li>Otimização parao seu Game favorito</li>
            </ul>
            <img src="/images/ted-game-solutions.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
