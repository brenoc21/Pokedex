import React, { useEffect, useState } from "react";

import { Column, ColumnContainer, Bar, Progress } from "./styles";

function StatBar({ stat, name }) {
  const [color, setColor] = useState();

  useEffect(() => {
    switch (true) {
      case stat < 50:
        setColor("#FF4444");
        break;
      case stat >= 50 && stat < 100:
        setColor("#ff964f");
        break;
      case stat >= 100 && stat < 150:
        setColor("#FDFD96");
        break;
      case stat >= 150 && stat < 200:
        setColor("#C1E1C1");
        break;
      case stat >= 200:
        setColor("#77DD77");
        break;
    }
  }, [stat]);
  return (
    <ColumnContainer>
      <Column>
        <p className="statName">{name && name}</p>
        <p className="statValue">{stat && stat}</p>
        <Bar>
          <Progress
            className="progress"
            level={stat && (stat / 255) * 100}
            color={color && color}
          ></Progress>
        </Bar>
      </Column>
    </ColumnContainer>
  );
}

export default StatBar;
