import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
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

    position: absolute;
    top: 0;
    bottom: 0;
    left: ${ props => props.direction === "left" && "10px"};
    right: ${ props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.7;
    
`
export const CarouselWrapper = styled.div`
    height: 100%;
`

export const SlideContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`

export const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`

export const Img = styled.img`
    height: 80%;
`

export const InfoContainer = styled.div`
    flex: 1;
    padding: 3.125rem;
`

export const SlideTitle = styled.h2`
    font-size: 4.375rem;
    text-transform: uppercase;
    margin-bottom: 0;
    margin-top: 0;
`

export const SlideDesc = styled.p`
    margin: 2.5rem 0 2.5rem 0;
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: 3px;
`
export const SlideBtn = styled.button`
    padding: 0.625rem;
    font-size: 1.25rem;
    cursor: pointer;
    background-color: ${ ({ theme: {secondary} }) => secondary.main};
    border-style: none;
    border-radius: 0.5rem;
    text-transform: uppercase;
    font-weight: 400;
`
