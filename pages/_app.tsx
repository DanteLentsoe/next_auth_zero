import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { RecoilRoot } from 'recoil';
import '@fortawesome/fontawesome-svg-core/styles.css';
import initFontAwesome from '../utils/initFontAwesome';
import '../styles/globals.css';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

initFontAwesome();

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <UserProvider>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ChakraProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </UserProvider>
  );
}
