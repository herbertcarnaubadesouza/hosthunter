import styles from "./styles.module.scss";

export function Banner() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <img src="/images/ilustracao1.png" alt="" />
        </div>
        <div className={styles.titleContent}>
          <h1>
            Transformando sua empresa com soluções de datacenter de alto
            desempenho
          </h1>
          <h2>Personalizadas para seu negócio!</h2>
          <button>Peça seu teste gratuito!</button>
        </div>
      </section>
    </>
  );
}
