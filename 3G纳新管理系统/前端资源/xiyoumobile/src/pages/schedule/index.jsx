import React, { Component } from 'react';
import {  Input , Descriptions , Progress} from 'antd';
import axios from 'axios';
import Skip from '../../components/Skip';
import ShowSchedule from '../../components/ShowSchedule';
import Reminder from '../../components/reminder';

export default class Schedule extends Component{

    state={
        data:{},
        hide:'none',
        isShow:'none',
        content:'学号不能为空',
        reveal:'block',
        show:'none'
    }
    
    StuNum = React.createRef();
    Email = React.createRef();
    timer = '';
    ScheduleSearch=()=>{
        console.log(this.StuNum.current.state.value);
        if(this.StuNum.current.state.value===undefined)
        {
            this.setState({
                isShow:'block'
             })
        }
        else
        {
            axios.get('/schedule',{
                params:{
                    'studentnumber':this.StuNum.current.state.value
                }
            }).then(res=>{
               this.setState({
                   data:res.data[0]
               })
               if(res.data[0]!==undefined)
               {
                if(this.state.data.mailaccount!==this.Email.current.state.value)
                {
                    alert('邮箱与对应的学号不符,请您检查!');
                }
                else{
                    this.setState({
                        hide:'block'
                    });
                    this.timer = setTimeout(()=>{
                       this.setState({
                           reveal:'none',
                           show:'block',
                           hide:'none'
                       })
                    },3000)
                }
               }
               else
               {
                   this.setState({
                       isShow:'block',
                       content:'当前学号还未报名!'
                   })
               }
            }).catch(err=>{
                alert('服务器错误,请稍后再试!');
                throw err;
            })
        }
    }

   componentWillUnmount()
   {
       clearTimeout(this.timer);
   }

    render()
    {
        return(
            <div className='Schedule' >
               <div className='SearchSchedule' style={{display:this.state.reveal}}>
                   <span className='mobilehead'>
                   </span>
                 <div className='Searchfrom'>
                 <span>学号:</span> <br/>
                  <Input ref={this.StuNum} style={{width:300,marginLeft:50}} placeholder='请输入您的学号'></Input>
                  <Reminder isShow={this.state.isShow} content={this.state.content}/>
                  <span>邮箱:</span><br />
                  <Input ref={this.Email} style={{width:300,marginLeft:50}} placeholder='请输入邮箱账号'></Input>
                 </div>
                 <button className='BtnSchedule' onClick={this.ScheduleSearch}>点击搜索</button>
               </div>
            <Skip hide={this.state.hide} content={'恭喜您登成功,页面正在跳转中!'}/>
            <ShowSchedule data={this.state.data} show={this.state.show}/>
            </div>
        )
    }
}