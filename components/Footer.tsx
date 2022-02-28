import React from 'react';
import { Box, Heading, Container, Text, Button, Stack, Icon, useColorModeValue, Link } from '@chakra-ui/react';
const Footer = () => (
  <footer className="bg-light p-3 text-center" data-testid="footer">
    <div className="logo" data-testid="footer-logo" />
    <Text color="black">
      Developed by <Link href="https://dantelentsoe.com">Dante Lentsoe</Link>
    </Text>
  </footer>
);

export default Footer;
