import styled from "styled-components";

export const Container = styled.div`
  padding: 0 20px;
  margin: 0 auto;
  @media (min-width: var(--breakpoint-sm)) {
    max-width: 540px;
    margin: auto;
    padding: 0;
  }
  @media (min-width: var(--breakpoint-md)) {
    max-width: 720px;
  }
  @media (min-width: var(--breakpoint-lg)) {
    max-width: 960px;
  }
  @media (min-width: var(--breakpoint-xl)) {
    max-width: 1140px;
  }
`