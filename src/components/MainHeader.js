import React, { useState } from 'react';
import { Menu, Header, Sidebar, Icon } from 'semantic-ui-react';

function MainHeader(props) {
  const { title } = props;
  const [visible, setVisible] = useState(false);

  const handleSidebarHide = () => setVisible(false);
  const handleToggle = () => setVisible(!visible);

  return (
    <>
      <Menu>
        <Menu.Item header>
          <Header as='h2'>{title}</Header>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item onClick={handleToggle}>
            <Icon name='sidebar' />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <Sidebar
        as={Menu}
        animation='overlay'
        direction='right'
        icon='labeled'
        inverted
        onHide={handleSidebarHide}
        vertical
        visible={visible}
        width='medium'
      >
        <Menu.Item onClick={handleSidebarHide}>
          <Icon name='close' />
        </Menu.Item>
        <Menu.Item name='home' />
        <Menu.Item name='about' />
        <Menu.Item name='contact' />
      </Sidebar>
    </>
  );
}

export default MainHeader;