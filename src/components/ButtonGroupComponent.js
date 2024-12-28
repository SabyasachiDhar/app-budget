import React from 'react'
import { Button } from 'semantic-ui-react'

function ButtonGroupComponent(props) {
	const { handleOk, handleCancel } = props;
	return (
		<div>
			<Button.Group>
				<Button color='red' onClick={handleCancel}>Cancel</Button>
				<Button.Or />
				<Button color='green' onClick={handleOk}>Ok</Button>
			</Button.Group>
		</div>
	)
}

export default ButtonGroupComponent