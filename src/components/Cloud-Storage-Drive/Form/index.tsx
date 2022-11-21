import styles from "./styles.module.scss";

export function CloudForm() {
  return (
    <section className={styles.container}>
      <div className={styles.titleSection}>
        <h2>Seus dados seguros na Cloud</h2>
        <p>Recorra a Backups da sua infraestrutura a qualquer momento</p>
        <p>
          *Data center em São Paulo que atende requisitos com alta
          disponibilidade
        </p>
      </div>
      <div className={styles.form}>
        <div className={styles.blockContent}>
          <div className={styles.leftFormSide}>
            <div className={styles.formColumnWrapper}>
              <div className={styles.inputWrapper}>
                <label>Nome</label>
                <input type="text"></input>
              </div>
              <div className={styles.inputWrapper}>
                <label>Empresa</label>
                <input type="text"></input>
              </div>
            </div>
            <div className={styles.formColumnWrapper}>
              <div className={styles.inputWrapper}>
                <label>Telefone</label>
                <input type="text"></input>
              </div>
              <div className={styles.inputWrapper}>
                <label>Serviços</label>
                <input type="text"></input>
              </div>
            </div>
          </div>
          <button>Solicitar um orçamento</button>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.formColumnWrapper}>
            <div className={styles.inputWrapper}>
              <label>E-mail</label>
              <input type="text"></input>
            </div>
            <div className={styles.inputWrapper}>
              <label>Mensagem</label>
              <textarea></textarea>
            </div>
          </div>
        </div>
        <button className={styles.mobileBtn}>Solicitar um orçamento</button>
      </div>
    </section>
  );
}
