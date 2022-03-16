import styled from "styled-components";

export const Container = styled.nav` 
    background-color: ${ ({ theme: {primary} }) => primary.main};// syntax to destructure theme props object to avoid repitition
    height: 3.75rem;
    color: white;
    position: relative;
    /* font-family: "Eagle Lake", cursive; */
`
export const NavB = styled.div`
    padding: 0.6rem 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
     
`

export const LogoCont = styled.div`
   
`

export const Logo = styled.h1`
    cursor: pointer;
    margin: 0;
    font-family: 'Eagle Lake', cursive;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    font-size: 2rem;
`

export const RightCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const MenuItem = styled.div`
    cursor: pointer;
    margin-left: 1.5rem;
`