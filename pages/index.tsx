import React from 'react';
import Head from 'next/head';
import Hero from '../components/Hero';
import Content from '../components/Content';

export default function Index() {
  return (
    <>
      <Head>
        <title>Star Wars App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero />
      <hr />
      <Content />
    </>
  );
}
