import styled from 'styled-components';

const ExploreMain = styled.div`
display: grid;
grid: "header" 10vh
      "content" 80vh
      "footer" 10vh
      / 1fr;

background-color: #EFEFEE;

header{
  grid-area: header;
}

section{
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  button{
    margin: 25px 0;
    padding: 10px;
    border: none;
    font-size: 1.5rem;
    width: 300px;
    background: black;
    color: #FAC267;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
  }
}

footer{
  grid-area: footer;
}
`;

export default ExploreMain;
