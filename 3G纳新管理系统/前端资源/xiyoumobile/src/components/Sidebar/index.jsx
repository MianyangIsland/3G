import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import { Menu } from 'antd';
import { DesktopOutlined , AndroidOutlined , IeOutlined , AppleOutlined , ConsoleSqlOutlined} from '@ant-design/icons';

const { SubMenu } = Menu;

export default class Sider extends Component {
  render() {
    return (
      <Menu
        style={{ width: "15%" , height:'100%' }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme='dark'
      >
        <SubMenu key="123" icon={<DesktopOutlined />} title="关于实验室">
          <Menu.Item className='sideritem' icon={<IeOutlined />} key="web">Web前端<Link to={'web-introduce'}/></Menu.Item>
          <Menu.Item className='sideritem' icon={<AndroidOutlined />} key="android">Android安卓<Link to={'android-introduce'}/></Menu.Item>
          <Menu.Item className='sideritem' icon={<ConsoleSqlOutlined />} key="server">Server后台<Link to={'server-introduce'}/></Menu.Item>
          <Menu.Item className='sideritem' icon={<AppleOutlined />} key="iOs">iOS<Link to={'ios-introduce'}/></Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}