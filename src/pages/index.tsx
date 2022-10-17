import type { NextPage } from "next";
import { About } from "../components/About";
import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";
import { Grid } from "../components/Grid";
import { DesktopHeader } from "../components/Header";
import { Services } from "../components/Services";
import { Ted } from "../components/Ted";

const Home: NextPage = () => {
  return (
    <>
      <DesktopHeader />
      <Banner />
      <Services />
      <Grid />
      <About />
      <Ted />
      <Footer />
    </>
  );
};

export default Home;
