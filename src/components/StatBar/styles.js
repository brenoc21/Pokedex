import styled from "styled-components";

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 95%;
  height: 100%;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 95%;
  height: 1rem;
  gap: 0.5rem;
  justify-content: flex-start;
  .statName {
    width: 60%;
    font-size: 0.8rem;
  }
  .statValue {
    width: 30%;
    text-align: center;
    font-size: 0.8rem;
  }
`;
export const Bar = styled.div`
  width: 100%;
  height: 1rem;
  background-color: #ccc;
  border-radius: 3px;
`;
export const Progress = styled.div`
  width: ${(props) => `${props.level}%`};
  background-color: ${(props) => `${props.color}`};
  border-radius: 3px;
  height: 100%;
`;
