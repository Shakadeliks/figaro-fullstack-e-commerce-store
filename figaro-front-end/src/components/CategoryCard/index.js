import React from 'react'
import {
    Container,
    Image,
    Info,
    Title,
    Button } from './CategoryCard.style';

const CategoryCard = ({ item }) => {
  return (
    <Container>
        <Image src={ item.img }/>
        <Info>
            <Title>{ item.title }</Title>
            <Button>shop now</Button>
        </Info>

    </Container>
  )
}

export default CategoryCard;