import React from 'react';
import { Text, Link, Image, Box, Center } from '@chakra-ui/react';
import LogoBrand from '../public/DanteLogog.png';
const Footer = () => (
  <footer className="bg-light p-20 text-center">
    <Center>
      <Box alignItems={'center'} justifyContent={'center'} textAlign={'center'}>
        <Image src={LogoBrand.src} alt="Dante Lentsoe developer branding" height={65} width={130} />
      </Box>
    </Center>

    <Text color="black">
      Developed by <Link href="https://dantelentsoe.com">Dante Lentsoe</Link>
    </Text>
  </footer>
);

export default Footer;
