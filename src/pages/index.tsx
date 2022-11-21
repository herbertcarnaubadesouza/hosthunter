import type { NextPage } from "next";
import { About } from "../components/Home/About";
import { Banner } from "../components/Home/Banner";
import { Footer } from "../components/Home/Footer";
import { Grid } from "../components/Home/Grid";
import { Header } from "../components/Home/Header";
import { Services } from "../components/Home/Services";
import { Ted } from "../components/Home/Ted";

const Home: NextPage = () => (
  <>
    <Header />
    <Banner />
    <Services />
    <Grid />
    <About />
    <Ted />
    <Footer />
  </>
);

export default Home;
