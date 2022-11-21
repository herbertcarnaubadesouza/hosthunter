import styles from "./styles.module.scss";

export function TedHunter() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <img src="/images/ted-hunter.png" alt="" />
        <div className={styles.textBlock}>
          <div className={styles.titleBlock}>
            <h2>
              Ted <span>Hunter</span>
            </h2>
          </div>
          <div className={styles.textBlock}>
            <p>
              This simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since
              the 1500s the 1500s.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
