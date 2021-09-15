import React from "react";
import styled from "styled-components"; 
import Link from 'next/link';
import { Logo } from '../templates/Logo';
import { NavLinks } from '../feature/NavLinks'

const NavBarContainer = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  padding: 0 1.5em;
`;

const LeftSection = styled.div`
  display: flex;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: end;
`;

const RightSection = styled.div`
  display: flex;
`;

export function Header() {
  return<NavBarContainer>
    <LeftSection>        
      <div>
          <Link href="/">
            <a>{<Logo xl />}</a>
          </Link>
        </div>
    </LeftSection>
    <MiddleSection>
      <NavLinks /> 
    </MiddleSection>
    <RightSection></RightSection>
    </NavBarContainer>
}