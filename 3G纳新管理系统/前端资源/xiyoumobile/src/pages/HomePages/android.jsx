import React,{Component} from 'react';
import HomeContent from '../../components/HomeContent';

export default class Android extends Component{
    render()
    {
        return(
          <HomeContent group={this.props.group}/>
        )
    }
}