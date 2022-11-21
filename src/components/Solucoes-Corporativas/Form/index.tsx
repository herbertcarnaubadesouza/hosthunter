import styles from "./styles.module.scss";

export function CorporativasForm() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.form}>
          <div className={styles.titleForm}>
            <h2>ATENDIMENTO 24H</h2>
            <p>
              Você ainda tem alguma dúvida sobre nossas soluções personalizadas?
            </p>
            <p>Entre em contato com a nossa equipe</p>
          </div>
          <div className={styles.blockContent}>
            <div className={styles.leftFormSide}>
              <div className={styles.formColumnWrapper}>
                <div className={styles.inputWrapper}>
                  <label>Nome</label>
                  <input type="text"></input>
                </div>
                <div className={styles.inputWrapper}>
                  <label>E-mail</label>
                  <input type="text"></input>
                </div>
              </div>
            </div>
            <button>Quero me conectar</button>
          </div>
        </div>
      </div>
    </section>
  );
}
