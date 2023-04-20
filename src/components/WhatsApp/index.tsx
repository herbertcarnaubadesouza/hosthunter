// import required modules
import WhatsAnimation from "../LottieAnimation/WhatsAppAnimation";
import styles from "./styles.module.scss";

export default function WhatsApp() {
  return (
    <>
      <section className={styles.sectionWhats}>
        <div className={styles.whatsApp}>
          <a rel="noreferrer" href="https://wa.link/lqv0a6">
            <WhatsAnimation />
          </a>
        </div>
      </section>
    </>
  );
}
