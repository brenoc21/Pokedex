import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 200px;
  border-radius: 10px;
  background-color: #f2f2f2;
  gap: 2rem;
  padding: 2rem;
  //box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  transition: 0.3s;
  cursor: pointer;
  img {
    max-width: 90px;
  }
  :hover {
    background-color: white;
    //transform: scale(1.03);
  }
`;
