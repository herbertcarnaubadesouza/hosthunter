import styles from "./styles.module.scss";

export function VPSGrid() {
  return (
    <section className={styles.container}>
      <div className={styles.titleSection}>
        <h2>Brasil Data Center</h2>
        <p>Um pouco dos nossos outros preços</p>
      </div>
      <div className={styles.gridSection}>
        <div className={styles.grid}>
          <div className={styles.gridHeader}>PROCESSADOR</div>
          <div className={styles.gridHeader}>CORES/THREADS</div>
          <div className={styles.gridHeader}>MEMÓRIA</div>
          <div className={styles.gridHeader}>ARMAZENAMENTO</div>
          <div className={styles.gridHeader}>PREÇO</div>
          <div className={styles.gridHeader} style={{ color: "#293964" }}>
            w
          </div>
          <div className={styles.processadorBlock}>
            <p>Intel Xeno E3 Family</p>
            <span>ou superior</span>
          </div>
          <p>4 cores /8 Threads</p>
          <p>16 GB</p>
          <p>2x 250GB SSD</p>
          <div className={styles.priceBlock}>
            <span>A partir de</span>
            <p style={{ fontSize: "24px" }}>800/mês</p>
          </div>
          <div className={styles.buttonGrid}>
            <a rel="noreferrer" href="https://wa.link/lqv0a6">
              <button>Solicite um orçamento</button>
            </a>
          </div>
          <div className={styles.processadorBlock}>
            <p>Intel Xeno E3 Family</p>
            <span>ou superior</span>
          </div>
          <p>4 cores /8 Threads</p>
          <p>16 GB</p>
          <p>2x 250GB SSD</p>
          <div className={styles.priceBlock}>
            <span>A partir de</span>
            <p style={{ fontSize: "24px" }}>800/mês</p>
          </div>
          <div className={styles.buttonGrid}>
            <a rel="noreferrer" href="https://wa.link/lqv0a6">
              <button>Solicite um orçamento</button>
            </a>
          </div>
          <div className={styles.processadorBlock}>
            <p>Intel Xeno E3 Family</p>
            <span>ou superior</span>
          </div>
          <p>4 cores /8 Threads</p>
          <p>16 GB</p>
          <p>2x 250GB SSD</p>
          <div className={styles.priceBlock}>
            <span>A partir de</span>
            <p style={{ fontSize: "24px" }}>800/mês</p>
          </div>
          <div className={styles.buttonGrid}>
            <a rel="noreferrer" href="https://wa.link/lqv0a6">
              <button>Solicite um orçamento</button>
            </a>
          </div>
          <div className={styles.processadorBlock}>
            <p>Intel Xeno E3 Family</p>
            <span>ou superior</span>
          </div>
          <p>4 cores /8 Threads</p>
          <p>16 GB</p>
          <p>2x 250GB SSD</p>
          <div className={styles.priceBlock}>
            <span>A partir de</span>
            <p style={{ fontSize: "24px" }}>800/mês</p>
          </div>
          <div className={styles.buttonGrid}>
            <a rel="noreferrer" href="https://wa.link/lqv0a6">
              <button>Solicite um orçamento</button>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.mobileSection}>
        <div className={styles.gridSectionMobile}>
          <div className={styles.block}>
            <div className={styles.blockHeader}>
              <p>Intel Xeno E3 Family</p>
              <span>ou superior</span>
            </div>
            <div className={styles.bodyContent}>
              <ul>
                <li>4 cores / 8 Threds</li>
                <li>16 GB</li>
                <li>2x 250GB SSD</li>
              </ul>
              <hr></hr>
              <div className={styles.footerContent}>
                <p>
                  A partir de <strong>800/mês</strong>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.blockHeader}>
              <p>Intel Xeno E3 Family</p>
              <span>ou superior</span>
            </div>
            <div className={styles.bodyContent}>
              <ul>
                <li>4 cores / 8 Threds</li>
                <li>16 GB</li>
                <li>2x 250GB SSD</li>
              </ul>
              <hr></hr>
              <div className={styles.footerContent}>
                <p>
                  A partir de <strong>800/mês</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.gridSectionMobile}>
          <div className={styles.block}>
            <div className={styles.blockHeader}>
              <p>Intel Xeno E3 Family</p>
              <span>ou superior</span>
            </div>
            <div className={styles.bodyContent}>
              <ul>
                <li>4 cores / 8 Threds</li>
                <li>16 GB</li>
                <li>2x 250GB SSD</li>
              </ul>
              <hr></hr>
              <div className={styles.footerContent}>
                <p>
                  A partir de <strong>800/mês</strong>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.blockHeader}>
              <p>Intel Xeno E3 Family</p>
              <span>ou superior</span>
            </div>
            <div className={styles.bodyContent}>
              <ul>
                <li>4 cores / 8 Threds</li>
                <li>16 GB</li>
                <li>2x 250GB SSD</li>
              </ul>
              <hr></hr>
              <div className={styles.footerContent}>
                <p>
                  A partir de <strong>800/mês</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ctaSection}>
        <p>Solicite um orçamento de qualquer dos produtos</p>
        <a rel="noreferrer" href="https://wa.link/lqv0a6">
          <button>Solicitar</button>
        </a>
      </div>
    </section>
  );
}
