import { Badge } from '@material-ui/core';
import { Close, Menu, ShoppingCartRounded } from '@material-ui/icons';
import React, { useState, useEffect } from 'react'
import { styled } from "@material-ui/core";
import { useTheme } from 'styled-components'
import {
    Container,
    NavB,
    HamburgerContainer,
    MobileCartContainer,
    LogoCont,
    RightCont,
    Logo, 
    MenuItem,
    BackgroundOverlay
} from './Navbar.styles';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getTotals } from '../../Redux/cartRedux';

const StyledBadge = styled(Badge)({
    "& .MuiBadge-badge": {
        color: "#1a1517",
        backgroundColor: "#cbc694",
        fontWeight: "600"
    }
});

const Navbar = () => {
    
    const theme = useTheme();
    const dispatch = useDispatch(); 
    const quantity = useSelector(state => state.cart.cartTotalQuantity);
    const cart = useSelector(state => state.cart.cartProducts)
 // state and function to enable toggle between mobile nav open and close

    const [isNavOpen, setIsNavOpen] = useState(false);

    const navMenuToggle = () => {
        setIsNavOpen(!isNavOpen);
        console.log(isNavOpen)
    }

    useEffect(() => {
        dispatch(getTotals());
    }, [cart])



  return (
    <>
        <Container>
            <NavB>
                
                <HamburgerContainer onClick={navMenuToggle}>
                    <Menu style={{fontSize: "2rem"}}/>
                </HamburgerContainer>
                <LogoCont>
                    <Link 
                        to="/"
                          style={{
                              color: "white",
                               textDecoration: "none"}}
                    >
                        <Logo>
                            figaro
                        </Logo>
                    </Link>
                </LogoCont>
                {/* this container to display only cart icon on mobile display */}
                <MobileCartContainer>
                    <Link to="/cart">
                        <StyledBadge badgeContent={quantity}>
                            <ShoppingCartRounded 
                                color={theme.textCol.textOnPrim} 
                                style={{fontSize: "2rem"}}
                            />
                        </StyledBadge>
                    </Link>
                </MobileCartContainer>
                <BackgroundOverlay isNavOpen={isNavOpen}/>
                <RightCont isNavOpen={isNavOpen}>
                    <MenuItem onClick={navMenuToggle} closeBtn="true">
                        <Close style={{fontSize: "2rem"}}/>
                    </MenuItem>
                    <MenuItem>
                        Register
                    </MenuItem>
                    <MenuItem>
                        Sign In
                    </MenuItem>
                    
                    <MenuItem>
                        <Link to="/cart">
                            <StyledBadge 
                                badgeContent={quantity} 
                                
                            >
                                <ShoppingCartRounded 
                                    style={{color: "white"}}
                                />
                            </StyledBadge>
                        </Link>
                    </MenuItem>
                    
                </RightCont>
            </NavB>
        </Container>
    </>
  )
}

export default Navbar;