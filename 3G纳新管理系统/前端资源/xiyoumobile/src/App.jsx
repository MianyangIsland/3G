import React, { Component , Fragment} from 'react';
import Navigation from './components/NavBar';
import Content from './components/Content';
import 'antd/dist/antd.min.css';
import './index.css';
export default class App extends Component{
    render()
    {
        return(
          <Fragment>
              <Navigation ></Navigation>
              <Content></Content>
          </Fragment>
        )
    }
}