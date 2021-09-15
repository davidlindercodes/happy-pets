import React from 'react';
import styled from "styled-components"; 

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0; 
  padding: 0;
  display: flex; 
  height: 100%;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500; 
  font-size: 14px;
  align-items:center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  &:hover {
    border-top: 2px solid #D24632
  }
`;

const Link = styled.a`
  text-decoration: none; 
  color: inherit; 
  font-size: inherit;
`;

export function NavLinks() {
  return <NavLinksContainer> 
    <LinksWrapper>
      <LinkItem>
        <Link href="#">About us</Link>
      </LinkItem>
      <LinkItem>
        <Link href="#">Pets</Link>
      </LinkItem>
      <LinkItem>
        <Link href="#">Aquatics</Link>
      </LinkItem>
      <LinkItem>
        <Link href="#">Dog Tag Engraving</Link>
      </LinkItem>
    </LinksWrapper>
  </NavLinksContainer>
}