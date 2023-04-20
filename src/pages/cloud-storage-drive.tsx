import type { NextPage } from "next";
import { CloudBanner } from "../components/Cloud-Storage-Drive/Banner";
import { CloudFooter } from "../components/Cloud-Storage-Drive/Footer";
import { CloudForm } from "../components/Cloud-Storage-Drive/Form";
import { Header } from "../components/Home/Header";
import PrivacyPolicy from "../components/PrivacyPolicy";
import WhatsApp from "../components/WhatsApp";

const CloudStorage: NextPage = () => {
  return (
    <>
      <Header />
      <CloudBanner />
      <CloudForm />
      <CloudFooter />
      <PrivacyPolicy />
      <WhatsApp />
    </>
  );
};

export default CloudStorage;
