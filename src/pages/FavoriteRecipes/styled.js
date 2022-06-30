import styled from 'styled-components';

const FavoriteStyled = styled.div`
display: grid;
grid: "header" 10vh
      "categories" 10vh
      "favorite" 80vh
      / 1fr;
background-color: #0fa36b;

header{
  grid-area: header;
  h1{
    font-size: 1.5rem;
  }
}

#filter{
  grid-area: categories;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

    button {
      padding: 0.5rem;
      margin: 0.5rem 0;
      width: 30%;
      text-transform: uppercase;
      font-weight: bold;
      border-radius: 6px;
      border: none;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
}

#favorite{
  grid-area: favorite;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
`;

export default FavoriteStyled;
