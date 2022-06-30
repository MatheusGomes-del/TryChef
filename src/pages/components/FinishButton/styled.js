import styled from 'styled-components';

const ButtonFinish = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  button{
    :disabled{
      opacity: 30%;
    }
    transition: .6s;
    position: fixed;
    bottom: 0;
    background-color: black;
    border-radius: 6px;
    border: none;
    color: #FAC267;
    width: 180px;
    height: 50px;
    margin-bottom: 10px;
    font-size: 20px;

  }
`;

export default ButtonFinish;
