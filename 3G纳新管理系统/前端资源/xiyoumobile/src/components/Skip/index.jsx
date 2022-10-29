import React, { Component } from 'react';
import { Spin } from 'antd';
export default class Skip extends Component{
    render()
    {
        return(
            <div className='skip' style={{display:this.props.hide}}>
                <div className="example">
                    <Spin size='large'/>
                <span className='skipcontent'>
                   {this.props.content}
                </span>
                </div>
            </div>
        )
    }
}