import styles from "./styles.module.scss";

export function TedServer() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <img src="/images/ted-muscle-server.png" alt="" />
        <h2>
          Traga sua <span>infraestrutura</span> para o data center{" "}
          <span>mais</span> redundante e seguro do <span>Brasil</span>
        </h2>
      </div>
    </section>
  );
}
