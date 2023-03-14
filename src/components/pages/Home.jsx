import React from "react";
import useTitle from "../../hooks/useTitle";
import About from "../About";
import Banner from "../Banner/Banner";
import Clients from "../Clients/Clients";
import Contact from "../Contact/Contact";
import Footer from "../layout/Footer";
import Layout from "../layout/Layout";
import Pricing from "../Pricing/Pricing";
import Schedule from "../Schedule/Schedule";
import Time from "../Time";
import UserReview from "../UserReview";

const Home = () => {
  useTitle("Home Page");
  return (
    <Layout>
      <Banner />
      <About />
      <UserReview />
      <Time />
      <Schedule />
      <Pricing />
      <Contact />
      <Clients />
      <Footer />
    </Layout>
  );
};

export default Home;
