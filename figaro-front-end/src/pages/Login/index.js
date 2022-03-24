import React from 'react'
import {
    Container,
    Wrapper,
    Title,
    Form,
    Input,
    Agreement,
    SubmitBtn,
    Link
} from "./Login.styles"

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>
                LOGIN
            </Title>
            <Form>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <SubmitBtn>login</SubmitBtn>
                <Link>forgot password?</Link>
                <Link>create new account</Link>

            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login;