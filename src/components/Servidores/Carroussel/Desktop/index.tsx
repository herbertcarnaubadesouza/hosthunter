import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";

export function DesktopCarroussel() {
  return (
    <section className={styles.container}>
      <div className={styles.titleContent}>
        <h2>Confira nossos planos:</h2>
        <p>Acelere sua empresa à partir de 39,90</p>
      </div>
      <div className={styles.descriptionContent}>
        <div className={styles.swiperWrapper}>
          <Swiper
            slidesPerView={3}
            spaceBetween={25}
            // centeredSlides={true}
            grabCursor={true}
            className="mySwiper"
          >
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.swiperContent}>
                <div className={styles.swiperTitle}>
                  <h3>Cloud Hosting</h3>
                  <p>The High performance cloud platform ever</p>
                  <p>Starting at</p>
                </div>
                <div className={styles.swiperFooter}>
                  <span>R$ 29.99</span>
                  <a rel="noreferrer" href="https://wa.link/lqv0a6">
                    <button>Comprar</button>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.swiperContent}>
                <div className={styles.swiperTitle}>
                  <h3>Cloud Hosting</h3>
                  <p>The High performance cloud platform ever</p>
                  <p>Starting at</p>
                </div>
                <div className={styles.swiperFooter}>
                  <span>R$ 29.99</span>
                  <a rel="noreferrer" href="https://wa.link/lqv0a6">
                    <button>Comprar</button>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.swiperContent}>
                <div className={styles.swiperTitle}>
                  <h3>Cloud Hosting</h3>
                  <p>The High performance cloud platform ever</p>
                  <p>Starting at</p>
                </div>
                <div className={styles.swiperFooter}>
                  <span>R$ 29.99</span>
                  <a rel="noreferrer" href="https://wa.link/lqv0a6">
                    <button>Comprar</button>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
