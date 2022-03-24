import React from 'react'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Newsletter from '../../components/Newsletter';
import {
    Container,
    ImgContainer,
    Wrapper,
    Image,
    InfoContainer,
    Title,
    Desc,
    Price,  
    FilterContainer,
    Filter,
    FilterSize,
    FilterTitle,
    FilterSizeOption,
    AmountContainer,
    AddContainer,
    Amount,
    AddToCartBtn,
    } from './ProductPage.styles';
import { productCategories } from '../../data';
import { Add, Remove } from '@material-ui/icons';


const ProductPage = () => {
  return (
    <Container>
        <Navbar />
        <Wrapper>
            <ImgContainer>
                <Image src={productCategories[0].img} />
            </ImgContainer>
            <InfoContainer>
              <Title>
                Cool hat 
              </Title>
              <Desc>Halloumi mozzarella macaroni cheese. Parmesan manchego pecorino cream cheese fromage edam halloumi brie. Taleggio cauliflower cheese monterey jack airedale dolcelatte mozzarella cheesy grin caerphilly. Cheese slices babybel fromage frais.</Desc>
              <Price>$20</Price>
              <FilterContainer>
                <Filter>
                  <FilterTitle>
                    size
                  </FilterTitle>
                  <FilterSize>
                    <FilterSizeOption>S</FilterSizeOption>
                    <FilterSizeOption>M</FilterSizeOption>
                    <FilterSizeOption>L</FilterSizeOption>
                    <FilterSizeOption>XL</FilterSizeOption>
                  </FilterSize>
                  
                </Filter>
              </FilterContainer>

              <AddContainer>
                <AmountContainer>
                  <Remove style={{cursor: "pointer"}}/>
                  <Amount>1</Amount>
                  <Add style={{cursor: "pointer"}}/>

                </AmountContainer>
                <AddToCartBtn>add to cart</AddToCartBtn>
              </AddContainer>
            </InfoContainer>
        </Wrapper>

        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductPage;