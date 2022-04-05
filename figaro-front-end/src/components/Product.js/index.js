import { FavoriteRounded, SearchRounded, ShoppingCartRounded } from '@material-ui/icons';
import React from 'react'
import {
    Container,
    Image,
    Info,
    Icon,
    Circle } from './Product.style';
import { Link } from "react-router-dom"    

const Product = ({ item }) => {
  return (
    <Container>
        {/* <Circle /> */}
        <Image src={item.img} />
        
            <Info>
                <Icon>
                    <ShoppingCartRounded />
                </Icon>
                
                <Icon>
                <Link to={`/products/${item._id}`}>
                    <SearchRounded style={{ color: "black" }} />
                </Link>    
                </Icon>
                <Icon>    
                    <FavoriteRounded />
                </Icon>
            </Info>
    </Container>
  )
}

export default Product;