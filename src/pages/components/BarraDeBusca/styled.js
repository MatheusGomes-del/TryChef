import styled from 'styled-components';

const SearchStyled = styled.form`
display: flex;
flex-direction: column;
align-items: center;
padding: 5px;
justify-content: center;
width: 100vw;

input[type="text"] {
  text-align: center;
  width: 90vw;
  height: 30px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 5px 0;
}


button {
  padding: 10px;
  border-radius: 5px;
  outline: none;
  background-color: #0fa36b;
  color: #fff;
  border: 1px solid #ccc;
  text-transform: uppercase;
  width: 50%;
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
`;

export default SearchStyled;
