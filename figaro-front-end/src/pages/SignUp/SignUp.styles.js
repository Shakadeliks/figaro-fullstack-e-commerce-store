import styled from "styled-components";
import LoginBg from "../../assets/login-background.jpg";
import { mobile } from "../../responsive"


export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${LoginBg}) center / cover;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Wrapper = styled.div`
    padding: 1.25rem;
    width: 40%;
    background-color: ${ ({ theme: {secondary} }) => secondary.main};

    ${ mobile({ width: "75%" })};

`

export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

export const Title = styled.h2`
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 300;
`

export const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 1.25rem 0.625rem 0 0;
    padding: 0.625rem;
    border: 0.0625rem solid black;
`

export const Agreement = styled.span`
    font-size: 0.75rem;
    margin: 1.25rem 0rem;
`

export const SubmitBtn = styled.button`
    width: 40%;
    border: none;
    padding: 0.9375rem 1.25rem;
    background-color: black;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.35s ease-in-out;
    
    &:hover {
        background-color: white;
        color: black;

    }
`
