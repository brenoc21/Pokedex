import styled from "styled-components";

export const TypeContainer = styled.div`
width: 100px;
height: 30px;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
background-color: ${(props) => (props.color)};
background-image: ${(props)=> props.background};
opacity: 0.8;
`