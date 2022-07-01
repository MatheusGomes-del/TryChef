import styled from 'styled-components';

const FoodCardStyled = styled.div`
  background-color: #efefee;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  height: 161px;
  width: 161px;
  a{
    display: grid;
    text-decoration: none;
    grid: "imagem" 109px
          "nome" 63px
          / 161px;

    img{
      grid-area: imagem;
      width: 161px;
      height: 109px;
      border-radius: 6px 6px 0 0 ;
    }

    h3{
      display: flex;
      justify-content: center;
      align-items: center;
      grid-area: nome;
      color: #000;
      text-align: center;
      font-size: 90%;
    }
  }

`;

export default FoodCardStyled;
