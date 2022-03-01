import React, { useState } from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import Planets from '../components/starswars/planets';
import People from '../components/starswars/people';
import { intialState } from '../store';
import { useRecoilState } from 'recoil';

export default withPageAuthRequired(function SSRPage() {
  // reset default store values
  const [currentPage, _] = useRecoilState(intialState);
  return (
    <>
      <div className="mb-5" data-testid="csr">
        <Head>
          <title>Star Wars App</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        {currentPage === 'planets' ? <Planets /> : <People />}
        <div data-testid="csr-text"></div>
      </div>
    </>
  );
});
