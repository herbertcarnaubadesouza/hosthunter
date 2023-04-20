import type { NextPage } from "next";
import { CloudFooter } from "../components/Cloud-Storage-Drive/Footer";
import { GameSolutionsBanner } from "../components/GameSolutions/Banner";
import { GameSolutionsForm } from "../components/GameSolutions/CloudForm";
import { GameSolutionsGrid } from "../components/GameSolutions/GameSolutionsGrid";
import { Header } from "../components/Home/Header";
import PrivacyPolicy from "../components/PrivacyPolicy";
import WhatsApp from "../components/WhatsApp";

const GameSolutions: NextPage = () => {
  return (
    <>
      <Header />
      <GameSolutionsBanner />
      <GameSolutionsGrid />
      <GameSolutionsForm />
      <CloudFooter />
      <PrivacyPolicy />
      <WhatsApp />
    </>
  );
};

export default GameSolutions;
