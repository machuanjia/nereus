import React,{Component} from 'react';
import './App.less';
import { actions } from './store'
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

export default class App extends React.Component {
  changeApp(key:string){
    window.history.pushState({}, key, `/${key}`);
  }
  render() {
    return (
          <section className="app">
            <aside className="app-aside">
            <Menu
                mode="inline"
                theme="dark"
                inlineCollapsed={true}
                onClick={({key})=>{this.changeApp(key as string)}}
              >
                <Menu.Item key="ploto" icon={<PieChartOutlined />}>
                  ploto
                </Menu.Item>
              </Menu>
            </aside>
            {/* <Button type="primary" onClick={() => goto('ploto', '/ploto')}>ploto</Button>
            <Button type="primary" onClick={() => login()}>login</Button> */}
          </section>


       
    );
  }
};
