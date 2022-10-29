import React,{Component} from 'react';
import HomeContent from '../../components/HomeContent';

export default class Server extends Component{
    render()
    {
        return(
          <HomeContent group={this.props.group}/>
        )
    }
}