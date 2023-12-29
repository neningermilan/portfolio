import React from 'react';
import Loader from '@/components/Loader';
import code from '../../../public/code.jpg'

function Hero() {
  return (
    <Loader duration={2} image={code.src} heading="Milan Neninger Full Stack Developer" />
      );
}

export default Hero;