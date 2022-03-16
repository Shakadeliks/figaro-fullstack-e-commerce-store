import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`

export const Arrow = styled.div`
    cursor: pointer;
    width: 50px;
    height: 50px;
    background-color: ${ ({ theme: {secondary} }) => secondary.main};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`

