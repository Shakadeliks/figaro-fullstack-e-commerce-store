import { Container, Arrow } from './Carousel.styles';
import React from 'react';
import { ArrowBackRounded, ArrowForwardRounded } from '@material-ui/icons';

const Carousel = () => {
  return (
    <Container>
        <Arrow>
            <ArrowBackRounded />
        </Arrow>
        <Arrow>
            <ArrowForwardRounded />
        </Arrow>
    </Container>
  )
}

export default Carousel;