import type { NextPage } from "next";
import { CompanyBanner } from "../components/Company/CompanyBanner";
import { CompanyFooter } from "../components/Company/CompanyFooter";
import { CompanyHistory } from "../components/Company/History";
import { TedHunter } from "../components/Company/TedHunter";
import { Header } from "../components/Home/Header";
import PrivacyPolicy from "../components/PrivacyPolicy";
import WhatsApp from "../components/WhatsApp";

const Company: NextPage = () => {
  return (
    <>
      <Header />
      <CompanyBanner />
      <CompanyHistory />
      <TedHunter />
      <CompanyFooter />
      <PrivacyPolicy />
      <WhatsApp />
    </>
  );
};

export default Company;
