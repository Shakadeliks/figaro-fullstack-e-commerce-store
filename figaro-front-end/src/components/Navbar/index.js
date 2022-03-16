import { Badge } from '@material-ui/core';
import { ShoppingCartRounded } from '@material-ui/icons';
import React from 'react'
import { styled } from "@material-ui/core";
import { useTheme } from 'styled-components'
import {
    Container,
    NavB,
    LogoCont,
    RightCont,
    Logo, 
    MenuItem} from './Navbar.styles';

const StyledBadge = styled(Badge)({
    "& .MuiBadge-badge": {
        color: "#1a1517",
        backgroundColor: "#cbc694",
        fontWeight: "600"
    }
});

const Navbar = () => {

    const theme = useTheme();
;

  return (
    <>
        <Container>
            <NavB>
                <LogoCont>
                    <Logo>
                        figaro
                    </Logo>
                </LogoCont>
                <RightCont>
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