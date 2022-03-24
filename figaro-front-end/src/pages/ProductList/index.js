import React from 'react'
import {
    Container,
    Title,
    FilterContainer,
    Filter, 
    FilterText,
    Select,
    Option} from "./ProductList.styles"
import Navbar from "../../components/Navbar"
import Products from '../../components/Products'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/Footer'


const ProductList = () => {
  return (
    <Container>
        <Navbar />
        <Title>hats</Title>
        <FilterContainer>
            <Filter>
                <FilterText>
                    sort products:
                </FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (highest)</Option>
                    <Option>Price (lowest)</Option>

                </Select>
            </Filter>
        </FilterContainer>
        <Products />
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductList;