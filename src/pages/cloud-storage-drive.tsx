import type { NextPage } from "next";
import { CloudBanner } from "../components/Cloud-Storage-Drive/Banner";
import { CloudFooter } from "../components/Cloud-Storage-Drive/Footer";
import { CloudForm } from "../components/Cloud-Storage-Drive/Form";
import { Header } from "../components/Home/Header";

const CloudStorage: NextPage = () => {
  return (
    <>
      <Header />
      <CloudBanner />
      <CloudForm />
      <CloudFooter />
    </>
  );
};

export default CloudStorage;
