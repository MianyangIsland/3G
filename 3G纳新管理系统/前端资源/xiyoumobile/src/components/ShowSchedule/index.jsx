import React, { Component } from 'react';
import { Timeline , Descriptions , Steps} from 'antd';
import { UserOutlined, SolutionOutlined, SmileOutlined } from '@ant-design/icons';
const { Step } = Steps;
export default class ShowSchedule extends Component{
    render()
    {
        const {classname,focusgroup,mailaccount,peoplename,phone,state,studentnumber} = this.props.data;
        return(
            <div className='ShowSchedule' style={{display:this.props.show}}>
                <div className='ScheduleLogo'></div>
                <div className='timeline'>
                    <span>温情提示:</span>
                <Timeline >
                        <Timeline.Item>纳新报名截止:2022年2月17日</Timeline.Item>
                        <Timeline.Item>第一次面试:2022年2月18日晚8点</Timeline.Item>
                        <Timeline.Item>第二次面试:2022年2月19日晚8点</Timeline.Item>
                        <Timeline.Item>第三次面试:2022年2月20日晚8点</Timeline.Item>
                        <Timeline.Item>报到:2022年2月21日晚8点ff105</Timeline.Item>
                </Timeline>
                </div>
                <div className='usermessage'>
                <Descriptions title="个人信息">
                    <Descriptions.Item label="姓名:" >{peoplename}</Descriptions.Item>
                    <Descriptions.Item label="学号:" >{studentnumber}</Descriptions.Item>
                    <Descriptions.Item label="电话:" >{phone}</Descriptions.Item>
                    <Descriptions.Item label="班级">{classname}</Descriptions.Item>
                    <Descriptions.Item label="邮箱">{mailaccount}</Descriptions.Item>
                    <Descriptions.Item label="报名组别:">{focusgroup}</Descriptions.Item>
                </Descriptions>
                </div>
                <div className='steps'>
                    <span>纳新进程:</span>
                <Steps size='default'>
                    <Step status="finish" title="报名" icon={<UserOutlined />} />
                    <Step status={state*1<1 ? 'wait':'finish'} title="第一次面试" icon={<SolutionOutlined />} />
                    <Step status={state*1<2 ? 'wait':'finish'} title="第二次面试" icon={<SolutionOutlined />} />
                    <Step status={state*1<3 ? 'wait':'finish'} title="第三次面试" icon={<SolutionOutlined />} />
                    <Step status={state*1<4 ? 'wait':'finish'} title="Pass" icon={<SmileOutlined />} />
                </Steps>,
                </div>
            </div>
        )
    }
}