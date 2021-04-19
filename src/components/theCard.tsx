import Item from 'antd/lib/list/Item';
import React, { Component } from 'react';
import { Drawer, Radio, Space, Grid } from 'antd';
import { Button } from 'antd';
import { Row, Col, Divider } from 'antd';
import { Badge, Card, Anchor } from 'antd';
import { Spin, Alert, Menu, Dropdown } from 'antd';

class theCard extends React.Component {
    constructor( props: any){
        super(props);
}

render( ){
    return(
    <div>
     <Menu>
            <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    </Menu.Item>
    </Menu> 
    </div>

    )
};
}

export default Card;

