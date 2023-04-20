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
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industrys standard
                      dummy text ever since the 1500s
                    </p>
                    <p className={styles.clientName}>Jeff Colinn</p>
                  </div>
                </div>
              </SwiperSlide>
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
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industrys standard
                      dummy text ever since the 1500s
                    </p>
                    <p className={styles.clientName}>Jeff Colinn</p>
                  </div>
                </div>
              </SwiperSlide>
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
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industrys standard
                      dummy text ever since the 1500s
                    </p>
                    <p className={styles.clientName}>Jeff Colinn</p>
                  </div>
                </div>
              </SwiperSlide>
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
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industrys standard
                      dummy text ever since the 1500s
                    </p>
                    <p className={styles.clientName}>Jeff Colinn</p>
                  </div>
                </div>
              </SwiperSlide>
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
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industrys standard
                      dummy text ever since the 1500s
                    </p>
                    <p className={styles.clientName}>Jeff Colinn</p>
                  </div>
                </div>
              </SwiperSlide>
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
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industrys standard
                      dummy text ever since the 1500s
                    </p>
                    <p className={styles.clientName}>Jeff Colinn</p>
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
