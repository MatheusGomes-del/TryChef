import styled from 'styled-components';

const ExploreIngredientS = styled.div`
display: grid;
grid: "header" 10vh
      "content" 80vh
      "footer" 10vh
      / 1fr;

background-color: #EFEFEE;

header{
  grid-area: header;
  font-size: 80%;
}

section{
  grid-area: content;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  height: auto;
  overflow: auto;

  button{
    width: 160px;
    height: 170px;
    margin: 10px;
    border: none;
    font-size: 1.5rem;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
  }
}

footer{
  grid-area: footer;
}
`;

export default ExploreIngredientS;
