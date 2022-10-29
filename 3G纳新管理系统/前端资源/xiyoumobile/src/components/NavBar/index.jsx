import React from 'react';
import { Menu } from 'antd';
import { SettingOutlined , UserAddOutlined , WifiOutlined , UserOutlined , SearchOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
const { SubMenu } = Menu;
export default class Navigation extends React.Component {
  state = {
    current: 'all-introduce',
  };

  handleClick = e => {
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" theme="dark" className="navigation" >
        <SubMenu key="introduce" icon={ <WifiOutlined />} title="关于实验室">
            <Menu.Item key="all-introduce">关于实验室<Link to="/web-introduce"/></Menu.Item>
        </SubMenu>
        <SubMenu key="SingUp" icon={<UserOutlined />} title="纳新报名">
           <Menu.Item key="singup" icon={<UserAddOutlined />}>报名入口 <Link to="/singUp"></Link></Menu.Item>
            <Menu.Item key="schedule" icon={<SearchOutlined />}>查看进度<Link to="/schedule"></Link></Menu.Item>
        </SubMenu>
        <SubMenu key="Administrator" icon={<SettingOutlined />} title="管理员">
            <Menu.Item key="generalize">纳新情况概要<Link to="/logintotal"></Link></Menu.Item>
            <Menu.Item key="Ad-web">前端纳新<Link to="/loginweb"></Link></Menu.Item>
            <Menu.Item key="Ad-server">后台纳新<Link to="/loginserver"></Link></Menu.Item>
            <Menu.Item key="Ad-Android">安卓纳新<Link to="/loginandroid"></Link></Menu.Item>
            <Menu.Item key="Ad-ios">ios纳新<Link to="/loginios"></Link></Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}