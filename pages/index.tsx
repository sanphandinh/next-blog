import React from 'react';
import Header from '../components/Header';
import Intro from '../components/Intro';

const Home = () => {
  return (
    <>
      <Header>
        <span className="text-4xl font-bold">Hello world</span>
      </Header>
      <Intro className="mt-6" />
    </>
  );
};

export default Home;
