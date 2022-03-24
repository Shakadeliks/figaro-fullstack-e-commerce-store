import React from 'react'
import {
    Container,
    Wrapper,
    Title,
    Form,
    Input,
    Agreement,
    SubmitBtn
} from "./SignUp.styles"

const SignUp = () => {
  return (
    <Container>
        <Wrapper>
            <Title>
                create an account
            </Title>
            <Form>
                <Input placeholder="First Name"/>
                <Input placeholder="Last Name"/>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
                <Agreement>
                    By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <SubmitBtn>create</SubmitBtn>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default SignUp;