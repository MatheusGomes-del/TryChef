import styled from 'styled-components';
import burek from '../../../images/burek.jpg';

const FoodStyle = styled.section`
display: grid;
  grid: "header" 10vh
        "mainS" 80vh
        "menubar" 10vh
        / 1fr;
/* background-color: #36100C;
background-color: #EDD998;
background-color: #545454;
background-color: #666665; */
/* background-image: url(${burek});
background-size: cover; */
background: rgba(226,226,226,1);


header{
  grid-area: header;
}

div{
  grid-area: mainS;
  display: grid;
  grid: "categories" 100px
        "list" 1fr
        / 1fr;

  div{
    grid-area: categories;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    /* background-color: #EDD998; */
    
    button {
      padding: 0.5rem;
      margin: 0.5rem 0;
      background-color: #EDD998;
      width: 30%;
      text-transform: uppercase;
      font-weight: bold;
      border-radius: 6px;
      border: none;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
  section{
    gap: 10px;
    grid-area: list;
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
  }
}

footer{
  grid-area: menubar;
}

`;

export default FoodStyle;
