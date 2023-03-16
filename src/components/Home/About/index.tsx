import styles from "./styles.module.scss";

export function About() {
  return (
    <>
      <section className="container">
        <div className={styles.allContent}>
          <div className={styles.title}>
            <h2>Para você poder ficar por dentro</h2>
            <p>Conheça mais sobre a nossa empresa</p>
          </div>
          <div className={styles.aboutContent}>
            <div className={`${styles.contentBox} first`}>
              <h2>Aqui não tem asteriscos e letras miúdas</h2>
              <p>
                Somos movidos pela transparência e honestidade em todos os
                relacionamentos que cultivamos. Aqui é você quem está no
                controle!
              </p>
            </div>
          </div>
          <div className={styles.aboutContent}>
            <div className={styles.contentBox}>
              <h2>
                Deixamos o velho e sem sentido<br></br> no passado
              </h2>
              <p>
                Nascemos da vontade de romper com um mercado tradicional e cheio
                de vícios.
              </p>
            </div>
          </div>
          <div className={styles.aboutContent}>
            <div className={`${styles.contentBox} third`}>
              <h2>Vestimos a camisa do seu negócio</h2>
              <p>
                Somos um time de pessoas diferentes que vestem a camisa para
                fazer o seu sucesso acontecer.
              </p>
            </div>
          </div>
          <div className={styles.aboutContent}>
            <div className={`${styles.contentBox} fourth`}>
              <h2>Sabemos como é estar no seu lugar</h2>
              <p>
                Nossas soluções são feitas e pensadas por empreendedores.
                Entendemos você e as necessidades do seu negócio!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
