import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";

export function MobileCarroussel() {
  return (
    <section className={styles.mobileCarrousselContainer}>
      <div className={styles.titleContainer}>
        <h2>Confira nossos planos</h2>
        <p>Melhore seus negócios apartir de 39,90</p>
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
    </section>
  );
}
