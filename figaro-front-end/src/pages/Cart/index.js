import React from 'react'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import {
    Container,
    Wrapper,
    Title,
    Top,
    Bottom} from './Cart.styles';

const Cart = () => {
  return (
    <Container>
        <Navbar />

        <Wrapper>
            <Title>your cart</Title>
            <Top></Top>
            <Bottom></Bottom>
        </Wrapper>

        <Footer />
    </Container>
  )
}

export default Cart;