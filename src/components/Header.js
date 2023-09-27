import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from "./Nav"

const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/" className="logo-div">
            <img src='./images/logo.png' alt="logo" />
        </NavLink>
        <Nav />
    </MainHeader>
  )
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo-div{
    padding:10px 10px;
  }
  .logo {
    border-radius:5%;
    height: 4rem;
  }
`;

export default Header