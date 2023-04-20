import type { NextPage } from "next";
import { Header } from "../components/Home/Header";
import PrivacyPolicy from "../components/PrivacyPolicy";
import { Carroussel } from "../components/Servidores/Carroussel";
import { ServerFooter } from "../components/Servidores/Footer";
import { VPSGrid } from "../components/Vpd-Cloud/Grid";
import { VpsCarroussel } from "../components/Vpd-Cloud/VPSCarroussel";
import { VpsCloudBanner } from "../components/Vpd-Cloud/VpsCloudBanner";

const VpsCloud: NextPage = () => {
  return (
    <>
      <Header />
      <VpsCloudBanner />
      <Carroussel />
      <VPSGrid />
      <VpsCarroussel />
      <ServerFooter />
      <PrivacyPolicy />
    </>
  );
};

export default VpsCloud;
