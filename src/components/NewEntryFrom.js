import React from 'react'
import { Form } from 'semantic-ui-react'
import ButtonGroupComponent from './ButtonGroupComponent'
import MainHeader from './MainHeader'

function NewEntryFrom() {
    return (
        <><MainHeader title='Add new transaction' /><Form unstackable>
            <Form.Group>
                <Form.Input icon='tags' width={12} label='Description' placeholder='New shinny thing' />
                <Form.Input width={4} label='Value' placeholder='100.00' icon='dollar' iconPosition='left' />

            </Form.Group>
            <ButtonGroupComponent />
        </Form></>
    )
}

export default NewEntryFrom