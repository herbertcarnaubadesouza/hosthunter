import type { NextPage } from "next";
import { TedServer } from "../components/Cloud-Storage-Drive/TedServer";
import { Header } from "../components/Home/Header";
import { Carroussel } from "../components/Servidores/Carroussel";
import { ServerFooter } from "../components/Servidores/Footer";
import { ServerGrid } from "../components/Servidores/Grid";
import { ServerBanner } from "../components/Servidores/ServerBanner";

const Server: NextPage = () => {
  return (
    <>
      <Header />
      <ServerBanner />
      <Carroussel />
      <ServerGrid />
      <TedServer />
      <ServerFooter />
    </>
  );
};

export default Server;
