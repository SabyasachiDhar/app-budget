import React from 'react'
import DisplayBalance from './DisplayBalance'
import { Grid, Segment } from 'semantic-ui-react'

function DisplayBalances(props) {
    const { totalIncome, totalExpense } = props
    return (
        <Segment textAlign='center'>
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column textAlign='left'>
                        <DisplayBalance balanceLabel='Income' balanceValue={totalIncome} colorType='green' />
                    </Grid.Column>
                    <Grid.Column textAlign='left'>
                        <DisplayBalance balanceLabel='Expenses' balanceValue={totalExpense} colorType='red' />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default DisplayBalances