import styled from "styled-components";

export const PokemonPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #424242;
  
`;
export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 90%;
height: 100%;
background-color: #f2f2f2
`;
export const PokemonContentContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 70%;
height: 100%;
background-color: #f8f8f8;
.TextContainer{
  display: flex;
  font-size: 2rem;
  gap: 1rem;
}
`;

export const PicContainer = styled.div`
width: 20rem;
display: flex;
align-items: center;
justify-content: center;
height: 20rem;
align-self: flex-start;
margin-left: 1rem;
background-color: #f2f2f2;
img {
    max-width: 20rem;
    
  }
`