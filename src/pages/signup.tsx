import React from 'react';
import {Logo} from "@/ui/Logo";
import {SignUpForm} from "@/components/forms/SignUpForm";
import {useFullHeight} from "@/hooks/useFullHeight"
import {GoogleButton} from "@/ui/GoogleButton";
import Link from "next/link";
import {IntroPicture} from "@/ui/IntroPicture";
import {Container} from "@/ui/Container";
import styled from "styled-components";
import {device} from "@/constants/breakpoints";

const Signup = () => {
    useFullHeight()
    return (
        <Container>
            <MainBlock>
                <Wrapper>
                    <Logo/>
                    <div>
                        <SignUpForm/>
                        <GoogleButton text={"Sign up with google"} disabled/>
                    </div>
                    <Text>
                        <span>Don`t have an account? </span>
                        <Link href={'/signup'}>
                            <span style={{
                                whiteSpace: 'nowrap',
                            }}>Sign in</span>
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

export default Signup;