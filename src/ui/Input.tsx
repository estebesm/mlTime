import styled from "styled-components";

interface Props {
    error?: boolean;
    fullWidth?: boolean;
}

export const Input = styled.input.attrs<Props>((props => ({
    error: props.error,
    fullWidth: props.fullWidth,
})))<Props>`
  outline: none;
  padding: 10px 12px;
  border: 1px solid ${({error}) => error ? 'var(--color-error)' : 'var(--color-accent)'};
  border-radius: var(--radius-xs);
  transition: all 0.15s ease-in-out;
  font-size: var(--text-md);
  color: var(--color-text);
  width: ${({fullWidth}) => fullWidth ? '100%' : ''};
  
  &:focus{
    color: var(--color-text);
    border: 1px solid ${({error}) => error ? 'var(--color-error)' : 'var(--color-primary)'};
    outline: 1px solid ${({error}) => error ? 'var(--color-error)' : 'var(--color-primary)'};;
    //box-shadow: ${({error}) => error ? 'var(--color-error)' : 'var(--color-accent)'} 0 3px 8px;
  }
`