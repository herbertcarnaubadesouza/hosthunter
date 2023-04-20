import { createClient } from "contentful";
import Link from "next/link";
import { Envelope, InstagramLogo, Phone } from "phosphor-react";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";

const contentfulClient = createClient({
  accessToken: "Noy9vNGCEQh64v6T6IB6Gw3dPZ_wNJt8QYVbAl6x3nM",
  space: "dqlsklgy3bcu",
});

export function Footer() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await contentfulClient.getEntries({
        content_type: "blog",
      });

      console.log(response.items);

      setPosts(response.items);
    }
    fetchPosts();
  }, []);

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
              spaceBetween={30}
              grabCursor={true}
              className="mySwiper"
            >
              {posts.map((post, index) => (
                <SwiperSlide key={post.sys.id} className={styles.swiperSlide}>
                  <Link href={`/blog/${post.sys.id}`}>
                    <a className={styles.swiperContent}>
                      <div className={styles.blogImage}>
                        <img src={post.fields.thumb.fields.file.url} alt="" />
                      </div>
                      <div className={styles.blogFooter}>
                        <h3>{post.fields.title}</h3>
                        <p>
                          {post.fields.body.content[0].content[0].value.slice(
                            0,
                            100
                          )}
                          ...
                        </p>
                      </div>
                    </a>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={styles.footerDescription}>
            <div className={styles.leftSideFooter}>
              <h3>
                <span style={{ color: "#f4c648" }}>HOST HUNTER SERVICOS</span>{" "}
                DE TECNOLOGIA DO BRASIL LTDA © 2023 CNPJ: 46.539.579/0001-66
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
