import React from 'react';

 import { Column, ColumnContainer,Bar } from './styles';

function StatBar({stat, name}) {
    console.log(stat*10 + 10)
  return (
    <ColumnContainer>
    <Column>
    <Bar level={stat && stat*100}/>
    <p>{name&& name}</p>
    </Column>
    </ColumnContainer>
  );
}

export default StatBar;