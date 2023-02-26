import React from 'react';
import useTitle from '../../hooks/useTitle';
import Clients from '../Clients/Clients';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Layout from '../layout/Layout';
import Pricing from '../Pricing/Pricing';
import Schedule from '../Schedule/Schedule';

const Home = () => {
  useTitle('Home Page');
  return (
    <Layout>
      <Schedule />
      <Pricing />
      <Contact />
      <Clients />
      <Footer />
    </Layout>
  );
};

export default Home;
