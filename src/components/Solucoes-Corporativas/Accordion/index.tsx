import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import styles from "./styles.module.scss";

export function Accordion() {
  const [selected, setSelected] = useState(null);

  const toggle = (i: any) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <section className={styles.container}>
      <div className={styles.accordion}>
        {data.map((item, index) => (
          <div key={item.id} className={styles.item}>
            <div className={styles.title} onClick={() => toggle(index)}>
              <div className={styles.accordionHeaderContainer}>
                <img src={item.img}></img>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.subtitle}</p>
                </div>
              </div>
              {selected !== index ? (
                <Plus weight="bold" style={{ minWidth: "14px" }} />
              ) : (
                <Minus weight="bold" style={{ minWidth: "14px" }} />
              )}
            </div>
            <div
              className={
                selected === index
                  ? `${styles.content} show`
                  : `${styles.content}`
              }
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const data = [
  {
    id: 1,
    title: "Huntermail",
    subtitle: "Segurança DDOS premium da HostHunter",
    img: "/images/accordion1.png",
    answer:
      "    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
  },
  {
    id: 2,
    title: "Hunter Solutions",
    subtitle: "Segurança DDOS premium da HostHunter",
    img: "/images/accordion2.png",
    answer:
      "    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
  },
  {
    id: 3,
    title: "Hunter Observability",
    subtitle: "Segurança DDOS premium da HostHunter",
    img: "/images/accordion3.png",
    answer:
      "    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
  },
  {
    id: 4,
    title: "Proteção DDOS",
    subtitle: "Segurança DDOS premium da HostHunter",
    img: "/images/accordion4.png",
    answer:
      "    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
  },
];
