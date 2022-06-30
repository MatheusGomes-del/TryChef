import styled from 'styled-components';

const SearchStyled = styled.form`
display: flex;
flex-direction: column;
align-items: center;
padding: 5px;
justify-content: center;
width: 100vw;
animation: scale-in-tr 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
font-size: 1.1rem;

input[type="text"] {
  width: 90vw;
  height: 30px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 5px 0;
  font-size: 1.1rem;
  outline: none;
}

input[type="radio"] {
  accent-color: #ffc439;
  transform: scale(1.5);
}

button {
  text-decoration: none;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  outline: none;
  background-color: black;
  color: #FAC267;
  border: 1px solid #ccc;
  text-transform: uppercase;
  width: 90vw;
  font-size: 1.1rem;
}

section {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 90vw;
  height: 40px;
  input[type="radio"] {
    margin-left: 5px;
  }
}

@keyframes scale-in-tr {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
}
`;

export default SearchStyled;
