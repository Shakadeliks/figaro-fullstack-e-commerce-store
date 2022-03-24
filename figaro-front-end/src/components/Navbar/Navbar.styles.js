import styled from "styled-components";
import { mobile } from "../../responsive"

export const Container = styled.nav` 
    background-color: ${ ({ theme: {primary} }) => primary.main};// syntax to destructure theme props object to avoid repitition
    height: 3.75rem;
    color: white;
    position: relative;

    //responsive
    ${ mobile({ height: "3.125rem"})}
    
`
export const NavB = styled.div`
    padding: 0.6rem 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
     
    ${ mobile({ padding: "0.625rem 0.3rem"})}

     
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

    ${ mobile({ fontSize: "1.5rem"})}

`

export const RightCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    ${ mobile({ justifyContent: "center", flex: "2" })}

`

export const MenuItem = styled.div`
    cursor: pointer;
    margin-left: 1.5rem;

    ${ mobile({ fontSize: "0.9375rem", marginLeft: "0.625rem" })}

`