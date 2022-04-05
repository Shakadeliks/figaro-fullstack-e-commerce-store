import React, { useEffect, useState } from 'react'
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
import { useLocation } from 'react-router-dom';
import axios, { Axios } from 'axios';
import {publicRequest} from "../../requestMethods"

const ProductPage = () => {

  const location = useLocation();
  let id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${id}`);
        setProduct(res.data)
        console.log(product)
      } catch (error) {
        
      }
    }

    getProduct();

  }, [id])

  console.log(product)

  return (
    <Container>
        <Navbar />
        <Wrapper>
            <ImgContainer>
                <Image src={product.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>
                { product.title }
              </Title>
              <Desc>{ product.desc }</Desc>
              <Price>${ product.price }</Price>
              <FilterContainer>
                <Filter>
                  <FilterTitle>
                    size
                  </FilterTitle>
                      <FilterSize> 
                        {product.size.map( (s) => (
                          <FilterSizeOption key={s}>{s}</FilterSizeOption>
                        ))}
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