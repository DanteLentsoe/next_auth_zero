import React, { useState } from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import Planets from '../components/starswars/planets';
import People from '../components/starswars/people';
import { Box, Heading, Container, Text, Button, Stack, Icon, useColorModeValue, createIcon } from '@chakra-ui/react';

export default withPageAuthRequired(function SSRPage() {
  const [page, setPage] = useState('planets');
  return (
    <>
      <div className="mb-5" data-testid="csr">
        <Head>
          <title>Star Wars App</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <h1 data-testid="csr-title">Client-side Rendered Page</h1>

        {page === 'planets' ? <Planets /> : <People />}
        <div data-testid="csr-text">
          <p>
            You can protect a client-side rendered page by wrapping it with <code>withPageAuthRequired</code>. Only
            logged in users will be able to access it. If the user is logged out, they will be redirected to the login
            page instead.
          </p>
          <p>
            Use the <code>useUser</code> hook to access the user profile from protected client-side rendered pages. The{' '}
            <code>useUser</code> hook relies on the <code>UserProvider</code> Context Provider, so you need to wrap your
            custom <a href="https://nextjs.org/docs/advanced-features/custom-app">App Component</a> with it.
          </p>
          <p>
            You can also fetch the user profile by calling the <code>/api/auth/me</code> API route.
          </p>
        </div>
      </div>
    </>
  );
});
