import styles from "./styles.module.scss";

export function DesktopGrid() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.title}>
          <h2>
            Descubra por que nossos clientes escolhem nossos serviços. Empresas
            que confiam em nosso produto
          </h2>
          <p>Empresas que confiam em nosso produto</p>
        </div>
        <div className={styles.gridContainer}>
          <div className={styles.ilustracao}>
            <img src="/images/ilustracao2.png" alt="" />
          </div>
          <div className={styles.gridContent}>
            <div className={styles.testimonialMasonryFirstRow}>
              <div className={`wide ${styles.depoiment}`}>
                <div className={styles.userInfo}>
                  <img src="/images/cliente1.png" alt="" />
                  <img src="/images/estrelas.png" alt="" />
                </div>
                <div className={styles.contentText}>
                  <p>
                    Desde que começamos a trabalhar com a HostHunter, nossos
                    serviços de tecnologia têm tido um desempenho excelente. A
                    escalabilidade, segurança e alta disponibilidade
                    proporcionadas por eles nos permitiram crescer e atender
                    nossos clientes com eficiência.
                  </p>
                  <p className={styles.clientName}>Marcelo Guimarães</p>
                </div>
              </div>
              <div className={`thin ${styles.depoiment}`}>
                <div className={styles.userInfo}>
                  <img src="/images/cliente2.png" alt="" />
                  <img src="/images/estrelas.png" alt="" />
                </div>
                <div className={styles.contentText}>
                  <p>
                    Os serviços de datacenter e soluções personalizadas
                    fornecidos pela HostHunter nos garantiram segurança e
                    eficiência no gerenciamento de nossos dados e informações
                    confidenciais. Além disso, o suporte técnico é sempre
                    prestativo e rápido para resolver qualquer problema.
                  </p>
                  <p className={styles.clientName}>Roberto Menezes</p>
                </div>
              </div>
            </div>
            <div className={styles.testimonialMasonrySecondRow}>
              <div className={`wide ${styles.depoiment}`}>
                <div className={styles.userInfo}>
                  <img src="/images/cliente3.png" alt="" />
                  <img src="/images/estrelas.png" alt="" />
                </div>
                <div className={styles.contentText}>
                  <p>
                    Com o auxílio da HostHunter, conseguimos implementar um
                    sistema de gestão mais eficiente e seguro em nossos
                    supermercados. A baixa latência e alta disponibilidade nos
                    permitiram melhorar nossos serviços e atendimento aos
                    clientes
                  </p>
                  <p className={styles.clientName}>Camila Alves</p>
                </div>
              </div>
              <div className={`thin ${styles.depoiment}`}>
                <div className={styles.userInfo}>
                  <img src="/images/cliente4.png" alt="" />
                  <img src="/images/estrelas.png" alt="" />
                </div>
                <div className={styles.contentText}>
                  <p>
                    A equipe da HostHunter revolucionou nosso servidor OTServer
                    Tibia. Com a infraestrutura fornecida, agora temos um
                    ambiente de jogo estável e seguro para nossos jogadores,
                    além de baixa latência e alta disponibilidade. Nossos gamers
                    estão extremamente satisfeitos com a experiência
                    proporcionada.
                  </p>
                  <p className={styles.clientName}>Henrique Oliveira</p>
                </div>
              </div>
            </div>
            <div className={styles.testimonialMasonryThirdRow}>
              <div className={`wide ${styles.depoiment}`}>
                <div className={styles.userInfo}>
                  <img src="/images/cliente5.png" alt="" />
                  <img src="/images/estrelas.png" alt="" />
                </div>
                <div className={styles.contentText}>
                  <p>
                    Com sua experiência e excelência em serviços, a HostHunter é
                    uma opção confiável para empresas que desejam ter uma
                    infraestrutura de data center confiável e de alta qualidade.
                  </p>
                  <p className={styles.clientName}>Ana Shuttz</p>
                </div>
              </div>
              <div className={`thin ${styles.depoiment}`}>
                <div className={styles.userInfo}>
                  <img src="/images/cliente6.png" alt="" />
                  <img src="/images/estrelas.png" alt="" />
                </div>
                <div className={styles.contentText}>
                  <p>
                    A equipe da HostHunter revolucionou nosso servidor OTServer
                    Tibia. Com a infraestrutura fornecida, agora temos um
                    ambiente de jogo estável e seguro para nossos jogadores,
                    além de baixa latência e alta disponibilidade. Nossos gamers
                    estão extremamente satisfeitos com a experiência
                    proporcionada.
                  </p>
                  <p className={styles.clientName}>Henrique Oliveira</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
