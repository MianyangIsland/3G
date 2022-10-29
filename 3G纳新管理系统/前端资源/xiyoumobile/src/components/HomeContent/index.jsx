import React, { Component } from 'react';
import axios from 'axios';
export default class HomeContent extends Component{
    state={
        message:'',
    }
    
   componentDidMount()
   {
    axios.get('/message',{
        params:{
            'group':this.props.group
        }
     }).then(res=>{
       this.setState({
           message:res.data
       })
     }).catch(err=>{
         throw err;
     })
   }
    
    render()
    {
        return(
            <div className='homecontent'>
                    <span>
                    {this.state.message}
                    </span>
            </div>
        )
    }
}