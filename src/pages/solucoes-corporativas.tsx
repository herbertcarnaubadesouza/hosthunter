import type { NextPage } from "next";
import { Header } from "../components/Home/Header";
import PrivacyPolicy from "../components/PrivacyPolicy";
import { ServerFooter } from "../components/Servidores/Footer";
import { Accordion } from "../components/Solucoes-Corporativas/Accordion";
import { CorporativasBanner } from "../components/Solucoes-Corporativas/CorporativasBanner";
import { CorporativasForm } from "../components/Solucoes-Corporativas/Form";

const SolucoesCorporativas: NextPage = () => {
  return (
    <>
      <Header />
      <CorporativasBanner />
      <Accordion />
      <CorporativasForm />
      <ServerFooter />
      <PrivacyPolicy />
    </>
  );
};

export default SolucoesCorporativas;
