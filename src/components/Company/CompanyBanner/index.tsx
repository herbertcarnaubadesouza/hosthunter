import styles from "./styles.module.scss";

export function CompanyBanner() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imgBlock}>
          <img src="/images/hosthunter.svg" alt="" />
        </div>
        <div className={styles.tedBlock}>
          <img src="/images/ted-empresa.png" alt="" />
          <div className={styles.textCompany}>
            <div className={styles.titleCompany}>
              <h2>O que é ser um</h2>
              <h2 style={{ color: "#F4C648" }}>Hunter?</h2>
            </div>
            <div className={styles.text}>
              <p>
                Nascemos da vontade de romper com um mercado tradicional e cheio
                de vícios. Entregamos soluções de tecnologia para acelerar
                negócios de pequenos e médios empreendedores. Nossos serviços
                são honestos e transparentes: aqui não tem asteriscos e letras
                miúdas.
              </p>
              <p>
                Agregamos valor entregando uma nova experiência, com sentido, e
                de acordo com o que o cliente precisa. Qualificamos o mercado
                por meio da educação e queremos possibilitar que milhões de
                empresas tenham mais sucesso no digital. Fazemos tudo isso
                unidos por um jeito de ser que só a Umbler tem
              </p>
              <p>
                Agregamos valor entregando uma nova experiência, com sentido, e
                de acordo com o que o cliente precisa. Qualificamos o mercado
                por meio da educação e queremos possibilitar que milhões de
                empresas tenham mais sucesso no digital. Fazemos tudo isso
                unidos por um jeito de ser que só a Umbler tem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
