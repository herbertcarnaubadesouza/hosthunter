import { Envelope, InstagramLogo, Phone } from "phosphor-react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";

export function Footer() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.footerTitle}>
            <h2>Na mídia</h2>
            <p>Uma parte da nossa história mundo a fora</p>
          </div>
          <div className={styles.swiperWrapper}>
            <Swiper
              slidesPerView="auto"
              spaceBetween={10}
              grabCursor={true}
              className="mySwiper"
            >
              <SwiperSlide className={styles.swiperSlide}>
                <div className={styles.swiperContent}>
                  <div className={styles.blogImage}>
                    <img src="/images/blog1.png" alt="" />
                  </div>
                  <div className={styles.blogFooter}>
                    <h3>TITULO DO ARTIGO</h3>
                    <p>Descrição rápida</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <div className={styles.swiperContent}>
                  <div className={styles.blogImage}>
                    <img src="/images/blog1.png" alt="" />
                  </div>
                  <div className={styles.blogFooter}>
                    <h3>TITULO DO ARTIGO</h3>
                    <p>Descrição rápida</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <div className={styles.swiperContent}>
                  <div className={styles.blogImage}>
                    <img src="/images/blog2.png" alt="" />
                  </div>
                  <div className={styles.blogFooter}>
                    <h3>TITULO DO ARTIGO</h3>
                    <p>Descrição rápida</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <div className={styles.swiperContent}>
                  <div className={styles.blogImage}>
                    <img src="/images/blog3.png" alt="" />
                  </div>
                  <div className={styles.blogFooter}>
                    <h3>TITULO DO ARTIGO</h3>
                    <p>Descrição rápida</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <div className={styles.swiperContent}>
                  <div className={styles.blogImage}>
                    <img src="/images/blog4.png" alt="" />
                  </div>
                  <div className={styles.blogFooter}>
                    <h3>TITULO DO ARTIGO</h3>
                    <p>Descrição rápida</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={styles.footerDescription}>
            <div className={styles.leftSideFooter}>
              <h3>
                <span style={{ color: "#f4c648" }}>Obrigado</span> por visitar o
                nosso site, sinta-se livre para entrar em contato conosco!
              </h3>
            </div>
            <div className={styles.rightSide}>
              <div className={styles.firstBlock}>
                <span style={{ color: "#f4c648" }}>Mapa do site</span>
                <ul>
                  <li>Home</li>
                  <li>Serviços</li>
                  <li>Game Solutions</li>
                  <li>Empresa</li>
                </ul>
              </div>
              <div className={styles.secondBlock}>
                <span
                  className={styles.footerMenuTitle}
                  style={{ color: "#f4c648" }}
                >
                  Contatos
                </span>
                <div className={styles.socialBlock}>
                  <div className={styles.social}>
                    <InstagramLogo size={16} weight="fill" />
                    <p>@HostHunter</p>
                  </div>
                  <div className={styles.social}>
                    <Phone size={16} weight="fill" />
                    <p>(11) 99269-9999</p>
                  </div>
                  <div className={styles.social}>
                    <Phone size={16} weight="fill" />
                    <p>(11) 99269-9999</p>
                  </div>
                  <div className={styles.social}>
                    <Envelope size={16} weight="fill" />
                    <p>HostHunter@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
