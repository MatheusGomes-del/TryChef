import styled from 'styled-components';

const HeaderStyle = styled.header`
  /* background-color: #CC9F38; */
  /* background-color: #84ACFA ; */
  background-color: #7CB650;
  grid-area: header;
  display: grid;
  grid: 'profile title search' 10vh
        "searchBar searchBar searchBar" 1fr
  / 1fr 2fr 1fr;
  z-index: 5;
  a{
    grid-area: profile;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border-radius: 50%;
    background-color: #fff; */
    /* filter: invert(95%) sepia(0%) saturate(7438%) 
    hue-rotate(197deg) brightness(110%) contrast(102%); */
  }
  h1{
    grid-area: title;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: black;
  }
  #searchIcon{
    grid-area: search;
    display: flex;
    align-items: center;
    justify-content: center;
    /* filter: invert(95%) sepia(0%) saturate(7438%) 
    hue-rotate(197deg) brightness(110%) contrast(102%); */
  }
  form{
    grid-area: searchBar;
    z-index: 5;
    background-color: #efefee;
  }
`;

export default HeaderStyle;
