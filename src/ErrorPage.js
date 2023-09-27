import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from './styles/Button';

const ErrorPage = () => {
  return (
    <Wrapper>
        <div className='container'>
          <h2>404</h2>
          <h3>UH OH! you are LOST.</h3>
          <p>The page you are looking for does not exist.
             You can back to home page by clicking button below
          </p>
          <NavLink to="/">
            <Button>
              Home
            </Button>
          </NavLink>
        </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;
    h2 {
      font-size: 10rem;
    }
    h3 {
      font-size: 4.2rem;
    }
    p {
      margin: 2rem 0;
    }
  }
`;
export default ErrorPage