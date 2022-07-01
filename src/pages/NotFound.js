import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import notFound from '../images/404page.png';
import burg from '../images/404test.png';

const NotFoundStyled = styled.div`
background-color: #e6e6e6;
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

p{
  margin-top: 15px;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
}
img{
  width: 360px;
  height: 500px;
  bottom: 0;
}

button{
    margin: 10px 0;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: black;
    color: #FAC267;
    font-size: 1.5rem;
    width: 150px;
  }

#test{
  position: absolute;
  width: 200px;
  height: 150px;
  top: 440px;
  left: 90px;
}
`;

export default function NotFound() {
  const history = useHistory();
  return (
    <NotFoundStyled>

      <p>Not Found</p>
      <button
        type="button"
        onClick={ () => history.push('/') }
      >
        Home
      </button>
      <img src={ notFound } alt="404" />
      <img id="test" src={ burg } alt="404burg" />
    </NotFoundStyled>
  );
}
