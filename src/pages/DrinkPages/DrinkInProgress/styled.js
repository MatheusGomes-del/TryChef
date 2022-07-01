import styled from 'styled-components';

const DrinkInProgressStyled = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 70px;

  img {
  width: 100vw;
  height: 155px;
  }

  div {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  div{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    p{
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 35px;
    }
    #category{

      font-size: 21px;
      line-height: 25px;
      color: #A9A9A9;
    }
  }

  button{
    width: 50px;
    height: 50px;
    background: none;
    border: none;
    margin-right: 15px;
    margin-top: -20px;
    img{
      width: 26px;
      height: 26px;
    }
  }
}

section{
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    letter-spacing: 0.03em;
    color: #000000;
  }
  ol{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
    list-style: none;
    width: 341px;
    background: white;
    border-radius: 4px;
    li{
      padding: 15px;

      input[type='checkbox']{
        margin-right: 10px;
        accent-color: #E27221;
      }
    }
  }
}

#instructions{
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    letter-spacing: 0.03em;
    color: #000000;
  }

  div{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
    list-style: none;
    width: 341px;
    background: white;
    border-radius: 4px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
}
`;

export default DrinkInProgressStyled;
