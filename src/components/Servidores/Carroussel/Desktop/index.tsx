import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";

export function DesktopCarroussel() {
  return (
    <section className={styles.container}>
      <div className={styles.titleContent}>
        <h2>De uma olhada em nossos pacotes:</h2>
        <p>Melhore seus negócios a partir de 39,90</p>
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
                  <button>Buy Now</button>
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
                  <button>Buy Now</button>
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
                  <button>Buy Now</button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
