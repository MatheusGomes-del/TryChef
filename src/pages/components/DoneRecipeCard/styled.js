import styled from 'styled-components';

const DoneCard = styled.div`
  height: 143px;
  display: grid;
  margin-left: 5px;
  background-color: aliceblue;
  background: #FFFFFF;
  border: 1px solid #F8EDED;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  width: 350px;
  grid: "image category share" 35px
        "image nome nome" 37px
        "image data data" 25px
        "image tag tag" 37px
        / 165px 140px 35px;

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
  #data{
    grid-area: data;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 10px;
  }

  section{
    grid-area: tag;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    
    p{
      background: #ECDEDE;
      border-radius: 12px;
      padding: 0.5px 9px;
    }
  }
`;

export default DoneCard;
