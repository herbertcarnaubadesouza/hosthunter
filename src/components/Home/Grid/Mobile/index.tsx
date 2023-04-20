import styles from "./styles.module.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
export function MobileGrid() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.title}>
          <h2>Descubra por que nossos clientes escolhem nossos serviços.</h2>
          <p>Empresas que confiam em nosso produto</p>
        </div>

        <div className={styles.depoimentBlock}>
          <div className={styles.leftSide}>
            <img src="/images/ilustracao2.png" alt="" />
          </div>
          <div className={styles.rightSide}>
            <Swiper
              slidesPerView="auto"
              centeredSlides={true}
              spaceBetween={10}
              grabCursor={true}
              className="mySwiper"
              initialSlide={2}
            >
              <SwiperSlide className={styles.swiperSlide}>
                <div className={styles.slideContent}>
                  <div className={styles.userInfo}>
                    <img src="/images/cliente1.png" alt="" />
                    <img
                      src="/images/estrelas.png"
                      alt=""
                      className={styles.estrelas}
                    />
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
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <div className={styles.slideContent}>
                  <div className={styles.userInfo}>
                    <img src="/images/cliente2.png" alt="" />
                    <img
                      src="/images/estrelas.png"
                      alt=""
                      className={styles.estrelas}
                    />
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
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <div className={styles.slideContent}>
                  <div className={styles.userInfo}>
                    <img src="/images/cliente3.png" alt="" />
                    <img
                      src="/images/estrelas.png"
                      alt=""
                      className={styles.estrelas}
                    />
                  </div>
                  <div className={styles.contentText}>
                    <p>
                      Desde que iniciamos a parceria com a HostHunter, nossa
                      infraestrutura de TI tem alcançado um desempenho
                      excepcional. A flexibilidade, proteção e prontidão
                      fornecidas por eles nos possibilitaram expandir nossos
                      negócios e oferecer serviços de qualidade aos nossos
                      clientes de forma eficaz.
                    </p>
                    <p className={styles.clientName}>Camila Alves</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <div className={styles.slideContent}>
                  <div className={styles.userInfo}>
                    <img src="/images/cliente4.png" alt="" />
                    <img
                      src="/images/estrelas.png"
                      alt=""
                      className={styles.estrelas}
                    />
                  </div>
                  <div className={styles.contentText}>
                    <p>
                      A equipe da HostHunter revolucionou nosso servidor
                      OTServer Tibia. Com a infraestrutura fornecida, agora
                      temos um ambiente de jogo estável e seguro para nossos
                      jogadores, além de baixa latência e alta disponibilidade.
                      Nossos gamers estão extremamente satisfeitos com a
                      experiência proporcionada.
                    </p>
                    <p className={styles.clientName}>Henrique Oliveira</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <div className={styles.slideContent}>
                  <div className={styles.userInfo}>
                    <img src="/images/cliente5.png" alt="" />
                    <img
                      src="/images/estrelas.png"
                      alt=""
                      className={styles.estrelas}
                    />
                  </div>
                  <div className={styles.contentText}>
                    <p>
                      Com sua experiência e excelência em serviços, a HostHunter
                      é uma opção confiável para empresas que desejam ter uma
                      infraestrutura de data center confiável e de alta
                      qualidade.
                    </p>
                    <p className={styles.clientName}>Ana Shuttz</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <div className={styles.slideContent}>
                  <div className={styles.userInfo}>
                    <img src="/images/cliente6.png" alt="" />
                    <img
                      src="/images/estrelas.png"
                      alt=""
                      className={styles.estrelas}
                    />
                  </div>
                  <div className={styles.contentText}>
                    <p>
                      A equipe da HostHunter revolucionou nosso servidor
                      OTServer Tibia. Com a infraestrutura fornecida, agora
                      temos um ambiente de jogo estável e seguro para nossos
                      jogadores, além de baixa latência e alta disponibilidade.
                      Nossos gamers estão extremamente satisfeitos com a
                      experiência proporcionada.
                    </p>
                    <p className={styles.clientName}>Henrique Oliveira</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide></SwiperSlide>
              {/* <SwiperSlide className={styles.swiperSlide}>teste</SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>teste</SwiperSlide> */}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
