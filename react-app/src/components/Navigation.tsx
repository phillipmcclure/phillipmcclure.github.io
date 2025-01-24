import React from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-weight: normal;
  font-size: large;
  padding: 0;
  position: sticky;
  background: #FFFFF3;
  z-index: 1000;
  max-width: 100%;
  overflow-x: hidden;

  @media (min-width: 1024px) {
    flex-direction: row;
    top: 2rem;
    left: 0;
    width: 225px;
    right: auto;
  }

  @media (max-width: 1024px) {
    margin: 0;
    padding: 1rem;
    justify-content: flex-start;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: 1px solid black;
  }
`

const NavContainer = styled.div`
  display: inline-block;
  width: 100%;
  
  @media (min-width: 1024px) {
    width: 100%;
  }
  
  @media (max-width: 1024px) {
    max-width: 100%;
    margin: 0;
  }
`

const StyledLink = css`
  h1 {
    display: inline-block;
    font-size: 16px;
    font-family: 'Arial', sans-serif;
    margin-right: 0.25rem;

    @media (max-width: 1024px) {
      font-size: 16px;
      margin-right: 0.25rem;
    }
  }
`

const NavLink = styled(RouterNavLink)`
  ${StyledLink}
  
  &.active h1 {
    text-decoration: underline;
  }
`

const ExternalLink = styled.a`
  ${StyledLink}
`

const Navigation: React.FC = () => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLink to="/"><h1>home,</h1></NavLink>
          {/* <NavLink to="/on-view"><h1>on view,</h1></NavLink> */}
          <NavLink to="/upcoming"><h1>exhibitions,</h1></NavLink>
          <NavLink to="/reading-room"><h1>reading room,</h1></NavLink>
          <NavLink to="/info"><h1>info,</h1></NavLink>
          <ExternalLink href="https://blueboyspace.substack.com/subscribe"><h1>newsletter,</h1></ExternalLink>
          <ExternalLink href="https://blueboy.bigcartel.com/"><h1>shop</h1></ExternalLink>
        </NavContainer>
      </Nav>
      
    </>
  )
}

export default Navigation 