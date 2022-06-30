import styled from 'styled-components';

const ButtonFinish = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  button{
    position: fixed;
    bottom: 0;
    background-color: green;
    width: 180px;
    height: 50px;
    margin-bottom: 10px;
    color: white;
    font-size: 20px;

    :disabled{
      opacity: 30%;
    }
  }
`;

export default ButtonFinish;
