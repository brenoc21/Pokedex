import React from 'react';
import StatBar from '../StatBar';

import { StatMeterContainer, StatMeterRow } from './styles';

function StatMeter({stats}) {
    console.log("stats: ", stats)
  return (
    <StatMeterContainer>
        <p>Stats</p>
        <StatMeterRow>
            <StatBar name={"hp"} stat={ stats && stats[0].base_stat/255}/>
            <StatBar name={"atk"} stat={ stats && stats[1].base_stat/255}/>
            <StatBar name={"def"} stat={ stats && stats[2].base_stat/255}/>
            <StatBar name={"spa"} stat={ stats && stats[3].base_stat/255}/>
            <StatBar name={"spd"} stat={ stats && stats[4].base_stat/255}/>
            <StatBar name={"spe"} stat={ stats && stats[5].base_stat/255}/>
        </StatMeterRow>
    </StatMeterContainer>
  );
}

export default StatMeter;