import React from 'react'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import {
    Container,
    Wrapper,
    Title,
    Top,
    Bottom,
    TopBtn,
    TopInfo,
    TopText,
    ProductInfo,
    Summary,
    Product,
    ProductDetails,
    Image,
    Details,
    ProductName,
    ProductSize,
    PriceDetails,
    ProductAmountContainer,
    ProductAmount,
    ProductPrice,
    Break,
    SummaryTitle,
    SummaryBtn,
    SummaryItem,
    SummaryItemPrice,
    SummaryItemText} from './Cart.styles';
import { popularProducts } from "../../data"
import { Add, Remove } from '@material-ui/icons';


const Cart = () => {
  return (
    <Container>
        <Navbar />

        <Wrapper>
            <Title>your cart</Title>
            <Top>

                <TopBtn>continue shopping</TopBtn>
                <TopInfo>
                    <TopText>shopping bag(2)</TopText>
                    <TopText>your wishlist(2)</TopText>

                </TopInfo>
                <TopBtn type='filled'>checkout</TopBtn>

            </Top>
            <Bottom>
                <ProductInfo>
                    <Product>
                        <ProductDetails>
                            <Image src={popularProducts[0].img}/>
                            <Details>
                                <ProductName>
                                    <b>product: </b>
                                    dope hat
                                </ProductName>
                                <ProductSize>
                                    <b>size: </b>
                                    M
                                </ProductSize>
                            </Details>
                        </ProductDetails>
                        <PriceDetails>
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount>
                                    2
                                </ProductAmount>
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>$50</ProductPrice>
                        </PriceDetails>
                    </Product>
                    <Break />
                    <Product>
                        <ProductDetails>
                            <Image src={popularProducts[0].img}/>
                            <Details>
                                <ProductName>
                                    <b>product: </b>
                                    dope hat
                                </ProductName>
                                <ProductSize>
                                    <b>size: </b>
                                    M
                                </ProductSize>
                            </Details>
                        </ProductDetails>
                        <PriceDetails>
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount>
                                    2
                                </ProductAmount>
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>$50</ProductPrice>
                        </PriceDetails>
                    </Product>
                </ProductInfo>
                <Summary>

                    <SummaryTitle>order summary</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>subtotal</SummaryItemText>
                        <SummaryItemPrice>$80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>shipping</SummaryItemText>
                        <SummaryItemPrice>$20</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText >total</SummaryItemText>
                        <SummaryItemPrice>$100</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryBtn>checkout</SummaryBtn>

                </Summary>
                
            </Bottom>
        </Wrapper>

        <Footer />
    </Container>
  )
}

export default Cart;