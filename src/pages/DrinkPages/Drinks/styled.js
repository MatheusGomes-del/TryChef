import styled from 'styled-components';

const DrinkStyle = styled.section`
display: grid;
  grid: "header" 10vh
        "mainS" 80vh
        "menubar" 10vh
        / 1fr;
background-color: #EFEFEE;

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

    button {
      padding: 0.5rem;
      margin: 0.5rem 0;
      width: 30%;
      height: 40px;
      text-transform: uppercase;
      font-size: 68%;
      font-weight: bold;
      border-radius: 6px;
      border: none;
      color: #FAC267;
      background-color: black;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
  section{
    margin-top: 10px;
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

export default DrinkStyle;
