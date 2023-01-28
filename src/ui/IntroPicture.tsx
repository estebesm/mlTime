import React from 'react';
import introPicture from "@/assets/intro.png";
import Image from "next/image";
import styled from "styled-components";
import {device} from "@/constants/breakpoints";

export const IntroPicture = () => {
    return (
        <Wrapper>
            <Image src={introPicture}
                   style={{
                       width: '100%',
                       height: '100%',
                       display: 'block',
                   }}
                   alt={"intro picture"}/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: none;
  
  @media${device.xl}{
    display: block;
    width: 500px;
    height: 500px;
  }
  @media${device.xl2}{
    width: 700px;
    height: 700px;
  }
`