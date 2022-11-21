import type { NextPage } from "next";
import { CompanyBanner } from "../components/Company/CompanyBanner";
import { CompanyFooter } from "../components/Company/CompanyFooter";
import { CompanyHistory } from "../components/Company/History";
import { TedHunter } from "../components/Company/TedHunter";
import { Header } from "../components/Home/Header";

const Company: NextPage = () => {
  return (
    <>
      <Header />
      <CompanyBanner />
      <CompanyHistory />
      <TedHunter />
      <CompanyFooter />
    </>
  );
};

export default Company;
