import styles from "./styles.module.scss";

export function GameSolutionsForm() {
  return (
    <section className={styles.container}>
      <div className={styles.titleSection}>
        <h2>
          Está <span style={{ color: "#F4C648" }}>frustado</span> com outros
          serviços? Entre em contato conosco para desenhar a melhor solução para
          o seu game!
        </h2>
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
