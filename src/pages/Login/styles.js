import styled from 'styled-components';
import burek from '../../images/burek.jpg';

const LoginStyle = styled.div`
  display: grid;
  grid: "image" 70vh
        "form" 30vh
        / 1fr;
  /* background-color: #0fa36b; */
  background-image: url(${burek});
  background-size: cover;
  div {
    grid-area: image;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
      background-color: rgba(0, 0, 0, 0.1);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      padding: 5px;
      font-size: 2.5rem;
      color: black;
      font-family: -apple-system, -apple-system;
    }
    p{
      /* transform: rotate(180deg) ; */
      text-decoration: line-through;
    }
  }

  form{
    grid-area: form;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    input {
      padding: 10px;
      border-radius: 4px;
      outline: none;
      border: none;
      /* transform: rotate(25deg) ; */
    }

    button{
      padding: 10px;
      border-radius: 4px;
      outline: none;
      border: none;
      width: 30%;
    }
  }
`;

export default LoginStyle;
