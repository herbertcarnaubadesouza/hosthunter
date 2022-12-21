import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

const services = [
  {
    url: "/cloud-storage-drive",
    icon: "Cloud_Icon.png",
    name: "Cloud Storage Drive",
    description:
      "is simply dummy text of the printing and typesetting industry.",
  },
  {
    url: "/server",
    icon: "Cloud_Folder_Icon.png",
    name: "Servidores e Colocations",
    description:
      "is simply dummy text of the printing and typesetting industry.",
  },
  {
    url: "/vps-cloud",
    icon: "Design_Icon.png",
    name: "VPS Cloud",
    description:
      "is simply dummy text of the printing and typesetting industry.",
  },
  {
    url: "/solucoes-corporativas",
    icon: "Building_Icon.png",
    name: "Solucões Corporativas",
    description:
      "is simply dummy text of the printing and typesetting industry.",
  },
  {
    url: "/",
    icon: "Website_Icon.png",
    name: "Registrar Dominio",
    description:
      "is simply dummy text of the printing and typesetting industry.",
  },
];

export function DesktopHeader() {
  const router = useRouter();
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerActions}>
          <div className="container">
            <Link href="/">
              <div className={styles.logo}>
                <img src="/images/logoHostHunter.png" alt="" />
              </div>
            </Link>
            <nav aria-label="Principal">
              <ul className={styles.navLinks}>
                <li>
                  {/* <Link href={'/'}>
                    <a className={router.pathname === '/' ? 'active' : ''}>
                      Serviços
                    </a>
                  </Link> */}
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="true"
                    aria-controls="dropdown1"
                  >
                    Serviços<span className={styles.arrow}></span>
                  </button>
                  <div className={styles.dropdown} id="dropdown1">
                    <div className={styles.triangle} />
                    <ul>
                      {services.map((service) => (
                        <li key={service.name}>
                          <Link href={service.url}>
                            <a className={styles.servicesItem}>
                              <img
                                src={`/images/${service.icon}`}
                                alt={`Ícone ${service.name}`}
                              />
                              <div>
                                <h3>{service.name}</h3>
                                {service.description}
                              </div>
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                <li>
                  <Link href={"/game-solutions"}>
                    <a
                      className={
                        router.pathname === "/game-solutions" ? "active" : ""
                      }
                    >
                      Gaming Solutions
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={"/company"}>
                    <a
                      className={router.pathname === "/company" ? "active" : ""}
                    >
                      Empresa
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className={styles.icon}>
              <img src="/images/person.svg" alt="" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
