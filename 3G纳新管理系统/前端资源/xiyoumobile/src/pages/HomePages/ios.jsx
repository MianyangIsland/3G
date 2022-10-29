import React,{Component} from 'react';
import HomeContent from '../../components/HomeContent';

export default class Ios extends Component{
    render()
    {
        return(
          <HomeContent group={this.props.group}/>
        )
    }
}