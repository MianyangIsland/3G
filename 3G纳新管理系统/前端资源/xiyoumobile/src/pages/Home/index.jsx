import React, { Component } from 'react';
import Door from '../../components/Door';
export default class Home extends Component{
    render()
    {
        console.log(this.props.focus);
        return(
            <div className='homepage'>
                <Door/>
            </div>
        )
    }
}