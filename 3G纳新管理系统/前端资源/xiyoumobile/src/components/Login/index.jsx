import React, { Component } from 'react';
import { Input , Button} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';
import Skip from '../Skip';
export default class Login extends Component{
    state={
        url:'',
        hide:'none',
        isShow:'block'
    }
    time='';
    account = React.createRef();
    password = React.createRef();
    Skip=()=>{
        if(this.account.current.state.value === '2271967580' && this.password.current.state.value === '2021gkbswyf')
        {
           let link = document.getElementById('skip');
           this.setState({
               hide:'block',
               isShow:'none'
           })
           this.time = setTimeout(()=>{
            link.click();
           },3000);
        }
        else
        {
            alert('您输入的账号或者密码有误,请检查');
        }
    }
    componentDidMount()
    {
        let str = '/' + this.props.url;
       this.setState({
           url:str
       })
    }

    componentWillUnmount()
    {
        clearTimeout(this.time);
    }
    render()
    {
        return(
            <div className='Login'>
                  <div className='loginfrom' style={{display:this.state.isShow}}>
                  <div className='Loginlogo'></div>
                  <Input ref={this.account} style={{marginBottom:30}} size="large" placeholder="账号" prefix={<UserOutlined />} />
                  <br />
                  <Input ref={this.password} style={{marginBottom:30}} size="large" type={'password'} placeholder="密码" prefix={<UserOutlined />} />
                  <br/>
                   <Button className='btnLogin' onClick={this.Skip} >点击登录</Button>
                   <Link id='skip' to={this.state.url}></Link>
                  </div>
                  <Skip hide={this.state.hide} content={'恭喜您登陆成功,页面正在跳转....'}/>
            </div>
        )
    }
}