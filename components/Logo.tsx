import React from 'react';
import LogoBrand from '../public/DanteLogog.png';
import { Image } from '@chakra-ui/react';
const Logo = ({ testId }) => (
  <figure className="" title="Dante Lentsoe Logo" data-testid={testId}>
    <Image src={LogoBrand.src} alt="logo" />
  </figure>
);

export default Logo;
