import React from 'react';
import {Container} from "@/ui/Container";
import {Logo} from "@/ui/Logo";
import styled from "styled-components";
import {SignInForm} from "@/components/forms/SignInForm";
import {useFullHeight} from "@/hooks/useFullHeight";

const Signin = () => {
    useFullHeight()
    return (
        <Container>
            <Wrapper>
                <Logo/>
                <SignInForm/>
            </Wrapper>
        </Container>
    );
};


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: var(--window-height);
  gap: 40px;
`

const Form = styled.form`
  position: relative;
`

export default Signin;