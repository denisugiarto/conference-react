import React from 'react';
import Header from '../UI/Header/Header';
import Layout from '../layout/Layout';
import useTitle from '../../hooks/useTitle';
import Schedule from '../UI/Schedule/Schedule';

const Home = () => {
  useTitle('Home Page');
  return (
    <Layout>
      <Schedule />
    </Layout>
  );
};

export default Home;
