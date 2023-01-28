import React from 'react';
import Image from "next/image";
import logo from "@/assets/logo.png"
import styled from "styled-components";

export const Logo = () => {
    return (
        <Wrapper>
            <Image src={logo} alt={"logo"}/>
            <Text>
                MLTime
            </Text>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
`

const Text = styled.span`
  display: block;
  font-size: 24px;
  font-weight: 600;
  //color: var(--color-primary)
`
