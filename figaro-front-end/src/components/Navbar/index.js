import { Badge } from '@material-ui/core';
import { Close, Menu, ShoppingCartRounded } from '@material-ui/icons';
import React, { useState } from 'react'
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

const StyledBadge = styled(Badge)({
    "& .MuiBadge-badge": {
        color: "#1a1517",
        backgroundColor: "#cbc694",
        fontWeight: "600"
    }
});

const Navbar = () => {

    const theme = useTheme();

 // state and function to enable toggle between mobile nav open and close

    const [isNavOpen, setIsNavOpen] = useState(false);

    const navMenuToggle = () => {
        setIsNavOpen(!isNavOpen);
        console.log(isNavOpen)
    }

  return (
    <>
        <Container>
            <NavB>
                
                <HamburgerContainer onClick={navMenuToggle}>
                    <Menu style={{fontSize: "2rem"}}/>
                </HamburgerContainer>
                <LogoCont>
                    <Logo>
                        figaro
                    </Logo>
                </LogoCont>
                {/* this container to display only cart icon on mobile display */}
                <MobileCartContainer>
                    <StyledBadge badgeContent={1}>
                        <ShoppingCartRounded 
                            color={theme.textCol.textOnPrim} 
                            style={{fontSize: "2rem"}}
                        />
                    </StyledBadge>
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
                        <StyledBadge 
                            badgeContent={1} 
                            
                        >
                            <ShoppingCartRounded 
                                color={theme.textCol.textOnPrim}
                            />
                        </StyledBadge>
                    </MenuItem>
                </RightCont>
            </NavB>
        </Container>
    </>
  )
}

export default Navbar;