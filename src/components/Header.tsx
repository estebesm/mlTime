import React from 'react';
import styled from "styled-components";
import {Container} from "@/ui/Container";
import {Logo} from "@/ui/Logo";
import Link from "next/link";

export const Header = () => {
    return (
        <>
            <HeaderBar>
                <Container>
                    <Panel>
                        <Logo/>
                        <Navigation>
                            <NavigationItem>
                                <Link href={"/"}>
                                    <Text>About</Text>
                                </Link>
                            </NavigationItem>
                            <NavigationItem>
                                <Link href={"/"}>
                                    <Text>Github</Text>
                                </Link>
                            </NavigationItem>
                            <NavigationItem>
                                <Link href={"/"}>
                                    <Text>Settings</Text>
                                </Link>
                            </NavigationItem>
                        </Navigation>
                    </Panel>
                </Container>
            </HeaderBar>
        </>
    );
};

const HeaderBar = styled.header`
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

const Panel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`

const Navigation = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`

const NavigationItem = styled.div`
  color: var(--color-text);
  font-size: var(--text-lg);
`

const Text = styled.span`
  color: var(--color-text);
`
