import React from 'react'
import { Header } from 'semantic-ui-react'

function MainHeader(props) {
    const {title} = props;
  return <Header as='h2'>{title}</Header>
}

export default MainHeader