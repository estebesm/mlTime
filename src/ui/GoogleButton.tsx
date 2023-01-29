import styled from "styled-components";
import {HTMLProps, ReactNode} from "react";
import googleIcon from "@/assets/google.png"
import Image from "next/image";

interface Props extends HTMLProps<HTMLButtonElement>{
    text?: string
}

export const GoogleButton = ({text}: Props) => {
    return (
        <StyledButton>
            <Image src={googleIcon} alt={"Google"}/>
            {text}
        </StyledButton>
    )
}

const StyledButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 10px 18px;
  color: var(--color-text);
  border-radius: var(--radius-xs);
  cursor: pointer;
  outline: none;
  border: 1px solid var(--color-accent);
  transition: .2s;
  font-size: var(--text-md);
  background-color: inherit;
  &:active{
    background-color: whitesmoke;
  }
  &:disabled{
    background-color: whitesmoke;
    cursor: default;
  }
`