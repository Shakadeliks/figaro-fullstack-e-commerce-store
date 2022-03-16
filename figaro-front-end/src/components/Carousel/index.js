import { 
    Container,
    Arrow, 
    CarouselWrapper, 
    SlideContainer, 
    Img,
    ImgContainer, 
    InfoContainer,
    SlideTitle,
    SlideDesc,
    SlideBtn} from './Carousel.styles';
import React from 'react';
import { ArrowBackRounded, ArrowForwardRounded } from '@material-ui/icons';
import CarouselImg from '../../assets/carousel-img1.jpg'

const Carousel = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowBackRounded />
        </Arrow>
        <CarouselWrapper>
          <SlideContainer>
            <ImgContainer>
              <Img src={CarouselImg}/>
            </ImgContainer>         
            <InfoContainer>
              <SlideTitle>
                fresh winter jackets
              </SlideTitle>
              <SlideDesc>
                don't miss out on our new range of designer jackets
              </SlideDesc>
              <SlideBtn>
                shop now
              </SlideBtn>
            </InfoContainer>
          </SlideContainer>  
        </CarouselWrapper>
        <Arrow direction="right">
            <ArrowForwardRounded />
        </Arrow>
    </Container>
  )
}

export default Carousel;