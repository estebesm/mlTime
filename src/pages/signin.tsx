import React from 'react';
import {Container} from "@/ui/Container";
import {Logo} from "@/ui/Logo";
import styled from "styled-components";
import {SignInForm} from "@/components/forms/SignInForm";
import {useFullHeight} from "@/hooks/useFullHeight";
import {GoogleButton} from "@/ui/GoogleButton";
import Link from "next/link";
import {IntroPicture} from "@/ui/IntroPicture";
import {device} from "@/constants/breakpoints";

const Signin = () => {
    useFullHeight();

    return (
        <Container>
            <MainBlock>
                <Wrapper>
                    <Logo/>
                    <div>
                        <SignInForm/>
                        <GoogleButton text={"Sign in with google"} disabled/>
                    </div>
                    <Text>
                        <span>Don`t have an account? </span>
                        <Link href={'/signup'}>
                            <span style={{
                                whiteSpace: 'nowrap',
                            }}>Sign up</span>
                        </Link>
                    </Text>
                </Wrapper>
                <IntroPicture/>
            </MainBlock>
        </Container>
    );
};


const MainBlock = styled.div`
  min-height: var(--window-height);
  display: flex;
  justify-content: center;
  align-items: center;
  @media${device.xl}{
    gap: 100px;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  gap: 40px;
`

const Text = styled.p`
  text-align: center;
`

export default Signin;