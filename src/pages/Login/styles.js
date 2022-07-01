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
    margin-bottom: 120px;

    span {
      background-color: rgba(0, 0, 0, 0.1);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      padding: 5px;
      font-size: 3rem;
      color: #E27221;
      font-family: -apple-system, -apple-system;
    }
    p{
      /* transform: rotate(180deg) ; */
      color: #7CB650;
      font-size: 1.5rem;
      /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); */
      /* text-decoration: ; */
    }
  }

  form{
    grid-area: form;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    input {
      text-align: center;
      padding: 10px;
      border-radius: 4px;
      outline: none;
      border: none;
      background-color: #7CB650;
      font-size: 1rem;
      color: white;
      ::placeholder {
        color: white;
      }
      /* transform: rotate(25deg) ; */
    }

    button{
      :disabled{
        opacity: 30%;
      }
      transition: .6s;
      padding: 10px;
      border-radius: 4px;
      outline: none;
      border: none;
      width: 30%;
      background-color: #E27221;
      color: white;
      box-shadow: 0 0 10px #7CB650;

    }
  }
`;

export default LoginStyle;
