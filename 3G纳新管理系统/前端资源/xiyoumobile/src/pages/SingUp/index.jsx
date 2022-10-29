import React,{Component} from 'react';
import { Input ,  Select , Button } from 'antd';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Reminder from '../../components/reminder';
import Skip from '../../components/Skip';
const { Option } = Select;
export default class From extends Component{

   state={
       group:'web前端',
       isShow:'none',
       content:'',
       isShowemail:'none',
       contentemail:'',
       disabled:true,
       hide:'none',
       state:'1',
   }
    time=''
    studentnumber = React.createRef();
    name=React.createRef();
    phone=React.createRef();
    email=React.createRef();
    class=React.createRef();
    Submit=()=>{
      axios.get('/singUp',{
          params:{
            'studentnumber':this.studentnumber.current.state.value,
            'name':this.name.current.state.value,
            'classname':this.class.current.state.value,
            'phone':this.phone.current.state.value,
            'email':this.email.current.state.value,
            'group':this.state.group
          }
      }).then(res=>{
         this.setState({
             hide:'block'
         })
         this.time=setTimeout(()=>{
             let link = document.getElementById('skip');
             link.click();
         },3000)
      }).catch(err=>{
          console.log(err);
      })
    }
    
  componentWillUnmount()
  {
      clearTimeout(this.time)
  }

    changeMajor=(value)=>{
        this.setState({
            major:value
        })
    }

    changeGropu=(value)=>{
        this.setState({
            group:value,
            disabled:false
        })
    }

    changeGrade=(value)=>{
        this.setState({
            grade:value
        })
    }

    //学号验证:
    verify=(focus)=>{
       return ()=>{
        axios.get('/vserify',{
            params:{
                'focus':focus
            }
        }).then(res=>{
            let AllStu = res.data;
            for(let i=0;i<AllStu.length;++i)
            {
                const {studentnumber} = AllStu[i];
                if(this.studentnumber.current.state.value.length!==8)
                {
                    this.setState({
                        isShow:'block',
                        content:'请输入正确的8位学号'
                    });
                    return 0;
                }
                if(studentnumber===this.studentnumber.current.state.value)
                {
                        this.setState({
                            isShow:'block',
                            content:'这个学号已经注册过了'
                        })
                        return 0;
                }
            }
            this.setState({
                isShow:'none'
            })
          }).catch(err=>{
          })
       }
    }
    //邮箱验证
    verifyemail=(focus)=>{
        return ()=>{
            axios.get('/vserify',{
                params:{
                    'focus':focus
                }
            }).then(res=>{
                let AllStu = res.data;
                
                for(let i=0;i<AllStu.length;++i)
                {
                    const {mailaccount} = AllStu[i];
                    if(mailaccount===this.email.current.state.value)
                    {
                        this.setState({
                            isShowemail:'block',
                            contentemail:'这个邮箱已经注册过了'
                        })
                        return 0;
                    }
                }
                this.setState({
                    isShowemail:'none'
                })
              }).catch(err=>{
                  alert('当前网络繁忙,请稍后重试!');
              })
           }
    }


    able=()=>{
        if(this.studentnumber !==''&&this.name!==''&&this.class!==''&&this.phone!==''&&this.email!=='')
        {
            if(this.state.isShow==='none'&&this.state.isShowemail==='none')
            {
                this.setState({
                    disabled:false
                })
            }
            else
            {
                alert('请将前面提示信息改正!');
            }
        }
        else
        {
            alert('请将信息填写完全!');
        }
    }
    render()
    {
        return(
            <div className='User'>
                <div className='FromSingUp'>
                    <div className='Fromimage'></div>
                 学号:<Input placeholder='学号' className='SingUpItem' ref={this.studentnumber} onBlur={this.verify('studentnumber')}></Input>
                 <Reminder isShow={this.state.isShow} content={this.state.content}/>
                 姓名:<Input placeholder='姓名' className='SingUpItem' ref={this.name}></Input>
                 班级:<Input placeholder='如:计科2007' className='SingUpItem' ref={this.class}></Input>
                 电话:<Input placeholder='电话' className='SingUpItem' ref={this.phone}></Input>
                 邮箱:<Input placeholder='请输入您的QQ邮箱账号' className='SingUpItem' ref={this.email}  onBlur={this.verifyemail('mailaccount')}></Input>
                 <Reminder isShow={this.state.isShowemail} content={this.state.contentemail}/>
                 组别:&nbsp;<br/><Select defaultValue="选择组别" style={{ width: 220 }} className='SingUpItem' onChange={this.changeGropu}  onBlur={this.able}>
                    <Option value="web前端">web前端</Option>
                    <Option value="server后台">server后台</Option>
                    <Option value="android安卓">android安卓</Option>
                    <Option value="ios">ios</Option>
                    </Select>
                    <br/>
                    <br/>
                    <Button type="primary" disabled={this.state.disabled} className='SingUpItem' onClick={this.Submit}>点击提交</Button>
            </div>
            <Link id='skip' to={'/skip'}/>
            <Skip hide={this.state.hide} content={'恭喜您报名成功,正在返回首页!'}/>
            </div>
        )
    }
}
