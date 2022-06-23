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
align-items: center;
flex-direction: column;
justify-content: center;
width: 90%;
height: 100%;
background-color: #f2f2f2;
.row{
  display: flex;
  width: 90%;
  
}
.TextContainer{
  display: flex;
  font-size: 2rem;
  gap: 1rem;
}
`;
export const PokemonContentContainer = styled.div`
display: flex;
align-items: flex-start;
width: 50%;
flex-direction: column;
align-items: center;
height: 100%;
background-color: #f8f8f8;

`;
export const PokemonCharacContainer = styled.div`
display: flex;
width: 50%;
height: 100%;
background-color: #f8f8f8;
flex-direction: column;
`
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
export const TypeSection = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
.typeRow{
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
`
export const EvolutionCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
.imgContainer{
  display: flex;
  width: 100px;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #aaaaaa;
}
img{
  width: 100%;
  
}
`
export const EvolutionSection = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
background-color: #EEEEEE;
padding: 1rem;
`