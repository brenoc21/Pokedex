import React from 'react';
import StatBar from '../StatBar';

import { StatMeterContainer, StatMeterRow } from './styles';

function StatMeter({stats}) {
    console.log("stats: ", stats)
  return (
    <StatMeterContainer>
        <p>Stats</p>
        <StatMeterRow>
            <StatBar name={"Health"} stat={ stats && stats[0].base_stat}/>
            <StatBar name={"Attack"} stat={ stats && stats[1].base_stat}/>
            <StatBar name={"Defense"} stat={ stats && stats[2].base_stat}/>
            <StatBar name={"SP.Attack"} stat={ stats && stats[3].base_stat}/>
            <StatBar name={"SP.Defense"} stat={ stats && stats[4].base_stat}/>
            <StatBar name={"Speed"} stat={ stats && stats[5].base_stat}/>
        </StatMeterRow>
    </StatMeterContainer>
  );
}

export default StatMeter;