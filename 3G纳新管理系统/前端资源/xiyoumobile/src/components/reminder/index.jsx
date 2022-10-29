import React, { Component } from 'react';
export default class Reminder extends Component{
    render()
    {
        return(
            <div className='reminder' style={{display:this.props.isShow,marginLeft:50}}>
                <span className='reminderimg'></span>
                <span className='remindertext'>{this.props.content}</span>
            </div>
        )
    }
}