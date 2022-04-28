import React, { useState, useEffect } from 'react'
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
    SummaryItemText,
    RemoveBtn,
    RemoveImgContainer} from './Cart.styles';
import { popularProducts } from "../../data"
import { Add, Remove } from '@material-ui/icons';
import { useSelector, useDispatch } from 'react-redux';
import { decreaseCartQuantity, addOneToCart, removeFromCart } from '../../Redux/cartRedux';
import StripeCheckout from "react-stripe-checkout";

const KEY = process.env.REACT_APP_STRIPE;

const Cart = () => {

    const [ItemsInCart, setItemsInCart] = useState();

    const cart = useSelector(state => state.cart.cartProducts);
    const totals= useSelector(state => state.cart)

    const dispatch = useDispatch();

    useEffect(() => {

        setItemsInCart(cart);

    }, [cart]);

    console.log(cart)

    const handleDecreaseCart = (cartItem) => {

        dispatch(decreaseCartQuantity({...cartItem}))
    }

    const handleIncreaseCart = (cartItem) => {

        dispatch(addOneToCart(cartItem));
    }

    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem));
    }

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
                      {cart.map(product => (
                        <>
                        <Product>
                            <ProductDetails>
                                <RemoveImgContainer>
                                    <Image src={product[0].img}/>
                                    <RemoveBtn onClick={() => handleRemoveFromCart(product)}>remove</RemoveBtn>    
                                </RemoveImgContainer>
                                <Details>
                                    <ProductName>
                                        <b>product: </b>
                                        {product[0].title}
                                    </ProductName>
                                    <ProductSize>
                                        <b>Size: </b>
                                        {product.cartSize}
                                    </ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Remove
                                        style={{ cursor: "pointer" }}
                                        onClick={()=>handleDecreaseCart(product)}
                                    />
                                    <ProductAmount>
                                        {product.cartQuantity}
                                    </ProductAmount>
                                    <Add
                                        style={{ cursor: "pointer"}}
                                        onClick={() => handleIncreaseCart(product)}
                                    />
                                </ProductAmountContainer>
                                      <ProductPrice>${product.totalPrice}</ProductPrice>
                            </PriceDetails>
                        </Product>
                        <Break />
                        </>
                        ))
                        }
                
                </ProductInfo>
                <Summary>

                    <SummaryTitle>order summary</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>subtotal</SummaryItemText>
                          <SummaryItemPrice>${totals.cartTotalPrice}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>shipping</SummaryItemText>
                        <SummaryItemPrice>$20</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText >total</SummaryItemText>
                          <SummaryItemPrice>${totals.cartTotalPrice + 20}</SummaryItemPrice>
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