import React from 'react'
import { Button } from 'semantic-ui-react'

function ButtonGroupComponent() {
	return (
		<div>
			<Button.Group>
				<Button color='red'>Cancel</Button>
				<Button.Or />
				<Button color='green'>Ok</Button>
			</Button.Group>
		</div>
	)
}

export default ButtonGroupComponent