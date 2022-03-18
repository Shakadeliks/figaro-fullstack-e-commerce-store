import { FavoriteRounded, ShoppingCartRounded } from '@material-ui/icons';
import React from 'react'
import {
    Container,
    Image,
    Info,
    Icon,
    Circle } from './Product.style';

const Product = ({ item }) => {
  return (
    <Container>
        <Circle />
        <Image src={item.img} />
        <Info>
            <Icon>
                <ShoppingCartRounded />
            </Icon>
            <Icon>    
                <FavoriteRounded />
            </Icon>
        </Info>
        
    </Container>
  )
}

export default Product;