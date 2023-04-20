import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";

export function Services() {
  return (
    <section className={styles.container}>
      <div className={styles.titleContent}>
        <h2>Confira nossos planos:</h2>
        <p>Acelere sua empresa à partir de 39,90</p>
      </div>
      <div className={styles.descriptionContent}>
        <div className={styles.descriptionList}>
          <ul>
            <li>Proteção Anti-DDOS</li>
          </ul>
          <ul>
            <li>Uplink de 10Gb</li>
          </ul>
          <ul>
            <li>Ativação Rápida</li>
          </ul>
          <ul>
            <li>DataCenter Redundante T3</li>
          </ul>
          <ul>
            <li>Discos SSD NVme</li>
          </ul>
          <ul>
            <li>Experimente sem custo por 30 dias</li>
          </ul>
        </div>

        <div className={styles.swiperWrapper}>
          <Swiper
            slidesPerView="auto"
            spaceBetween={10}
            centeredSlides={true}
            centerInsufficientSlides={true}
            grabCursor={true}
            className="mySwiper"
            initialSlide={1}
          >
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.swiperContent}>
                <div className={styles.swiperTitle}>
                  <h3>Game Cloud Server</h3>
                  <p>Armazene seus dados seguros na nuvem</p>
                  <p>A partir de</p>
                </div>
                <div className={styles.swiperFooter}>
                  <span>R$ 29.99</span>
                  <button>Comprar</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.swiperContent}>
                <div className={styles.swiperTitle}>
                  <h3>Dedicated Business Server</h3>
                  <p>
                    Servidores VPS de alta performance e disponibilidade para
                    projetos personalizados
                  </p>
                  <p>A partir de</p>
                </div>
                <div className={styles.swiperFooter}>
                  <span>R$ 29.99</span>
                  <button>Comprar</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.swiperContent}>
                <div className={styles.swiperTitle}>
                  <h3>Dedicated Gaming Server</h3>
                  <p>
                    Monte ou alugue a melhor infrestrutura on-premise para o seu
                    negócio.
                  </p>
                  <p>A partir de</p>
                </div>
                <div className={styles.swiperFooter}>
                  <span>R$ 29.99</span>
                  <button>Comprar</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.swiperContent}>
                <div className={styles.swiperTitle}>
                  <h3>File Backup Cloud Server</h3>
                  <p>
                    Registre o nome do seu negócio de forma rápida e ganhe
                    visibilidade.
                  </p>
                  <p>A partir de</p>
                </div>
                <div className={styles.swiperFooter}>
                  <span>R$ 29.99</span>
                  <button>Comprar</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.swiperContent}>
                <div className={styles.swiperTitle}>
                  <h3>VoIP Game Cloud Server</h3>
                  <p>
                    Desenhe a melhor solução para sua empresa com nossos
                    engenheiros de datacenter
                  </p>
                  <p>A partir de</p>
                </div>
                <div className={styles.swiperFooter}>
                  <span>R$ 29.99</span>
                  <button>Comprar</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
