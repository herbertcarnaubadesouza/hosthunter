import styles from "./styles.module.scss";

export function Banner() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <img src="/images/ilustracao1.png" alt="" />
        </div>
        <div className={styles.titleContent}>
          <h1>Servidores estáveis para aplicações estáveis</h1>
          <h2>Para você ter o serviço que merece!</h2>
          <button>Peça seu teste gratuito!</button>
        </div>
      </section>
    </>
  );
}
