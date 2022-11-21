import styles from "./styles.module.scss";

export function CompanyHistory() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <div className={styles.titleBlock}>
            <h2>
              Venha participar da <span>nossa historia</span>
            </h2>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.text}>
              <p>
                Na Umbler, nós acordamos todos os dias para destacar o negócio
                dos nossos clientes da multidão. Queremos ser a maior plataforma
                de negócios para empreendedores do mundo.
              </p>
              <p>
                E esse é o nosso jeito de ser e fazer as coisas. A reinvenção e
                o renascimento fazem parte da nossa essência, mas uma coisa
                nunca muda: somos todos Umbler!
              </p>
            </div>
          </div>
          <button>Junte-se a nós</button>
        </div>
        <div className={styles.rightSide}>
          <img src="/images/historyImages.png" alt="" />
        </div>
      </div>
    </section>
  );
}
