import React from 'react'
import { Statistic } from 'semantic-ui-react'

function DisplayBalance(props) {
    const {balanceLabel, balanceValue, colorType} = props;
    return (
        <Statistic size='small' color={colorType} style={{textAlign: 'left'}}>
            <Statistic.Label>{balanceLabel}</Statistic.Label>
            <Statistic.Value>{balanceValue}</Statistic.Value>
        </Statistic>
    )
}

export default DisplayBalance