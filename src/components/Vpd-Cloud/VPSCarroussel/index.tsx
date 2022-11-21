import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";

export function VpsCarroussel() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2>Servidores protegidos com proteção DDOS</h2>
          </div>
          <div className={styles.swipperWrapper}>
            <Swiper
              slidesPerView={5}
              loop
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              // spaceBetween={3}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              grabCursor={true}
              className="mySwiper"
            >
              <SwiperSlide className={styles.swiperSlide}>
                <img src="/images/windows.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <img src="/images/debian.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <img src="/images/Ubuntu.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <img src="/images/random3.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <img src="/images/CentOS.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <img src="/images/Linux.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <img src="/images/Fedora.png" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
