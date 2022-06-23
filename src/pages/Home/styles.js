import styled from "styled-components";

export const Cardbox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: #424242;
`;
export const Container = styled.div`
  display: flex;
  padding: 1rem;
  min-height: 100vh;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  background-color: #ffffffff;
`;
export const ShinyButton = styled.button`
position: relative;
border: none;
width: 1.5rem;
height: 1.5rem;
border-radius: 50%;
background-color: white;
cursor: pointer;
.svg{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
}
  
`