import styled from "styled-components";

export const ColumnContainer = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
width: 2rem;
height: 12rem;
`
export const Column = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 95%;
gap: 0.5rem;
justify-content: flex-end;

`
export const Bar = styled.div`
height: ${(props) => ( `${props.level}%` )};;
width: 2rem;
background-color: #A4D8D8;
`