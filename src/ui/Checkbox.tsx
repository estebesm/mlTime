import styled from "styled-components";

export const Checkbox = styled.input.attrs({
    type: "checkbox"
})`
  -webkit-appearance: none;
  /* Remove most all native input styles */
  appearance: none;
  /* For iOS < 15 */
  background-color: inherit;
  /* Not removed via appearance */
  margin: 0;

  font: inherit;
  color: blue;
  width: 16px;
  height: 16px;
  border: 1px solid var(--color-accent);
  border-radius: 4px;
  transform: translateY(0);

  display: inline-grid;
  place-content: center;

  &::before {
    content: "";
    width: 12px;
    height: 12px;
    clip-path: inset(15% 15% 15% 15%);
    transform: scale(0);
    //transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    //box-shadow: inset 4px 4px var(--color-accent);
    /* Windows High Contrast Mode */
    background-color: var(--color-primary);
  }
  
  &:checked::before {
    transform: scale(1);
  }
`