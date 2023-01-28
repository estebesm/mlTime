import styled from "styled-components";


export const Button = styled.button`
  padding: 10px 18px;
  background-color: var(--color-primary);
  color: var(--color-text-secondary);
  border-radius: var(--radius-xs);
  cursor: pointer;
  outline: none;
  border: none;
  transition: .2s;
  font-size: var(--text-md);
  &:active{
    background-color: var(--color-primary-dark);
    box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
  }
  &:disabled{
    background-color: var(--color-accent);
    cursor: default;
  }
`
