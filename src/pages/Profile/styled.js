import styled from 'styled-components';

const ProfileStyled = styled.div`
display: grid;
grid: "header" 10vh
      "content" 80vh
      "footer" 10vh
      / 1fr;

header{
  grid-area: header;
}

section{
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  p{
    margin: 50px 0;
    font-size: 1.5rem;
  }

  button{
    margin: 10px 0;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #c4c4c4;
    font-size: 1.5rem;
    width: 300px;
  }
}

footer{
  grid-area: footer;
}
`;

export default ProfileStyled;
