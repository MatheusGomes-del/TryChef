import styled from 'styled-components';

const FavoriteCard = styled.div`
  height: 143px;
  display: grid;
  margin-left: 5px;
  background-color: aliceblue;
  background: #FFFFFF;
  border: 1px solid #F8EDED;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  width: 350px;
  grid: "image category category" 30px
        "image nome nome" 50px
        "image share favorite" 40px
        / 165px 75px 75px;

  #image {
    grid-area: image;
    width: 165px;
    height: 140px;
    border-radius: 6px;
  }
  
  #category {
    grid-area: category;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 10px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #A9A9A9;
  }
  
  #share{
    grid-area: share;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
  }
  
  #nameRecipe {
    grid-area: nome;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 10px;
    text-decoration: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 25px;
    letter-spacing: 0.01em;
    color: #000000;
  }

  #Favorite {
    grid-area: favorite;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    filter: invert(17%) 
    sepia(81%) saturate(7441%) hue-rotate(358deg) brightness(110%) contrast(118%);
  }

`;

export default FavoriteCard;
