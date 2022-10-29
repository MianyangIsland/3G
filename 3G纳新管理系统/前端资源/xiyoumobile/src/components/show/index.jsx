import React from 'react';
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import axios from 'axios';

export default class Show extends React.Component {
  state = {
    searchText: '',
    searchedColumn: '',
    data:[]
  };
  componentDidMount()
  {
    axios.get(this.props.focus).then(res=>{
      this.setState({
         data:res.data
      })
    }).catch(err=>{
      throw err;
    })
  }
  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  
   handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };
  
   handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };
  
  Pass = (record)=>{
    const {studentnumber,state,mailaccount,focusgroup} = record
    let StuNum = studentnumber;
    let State = state;
    let EmailAccount=mailaccount;
    let Group=focusgroup;
     return ()=>{
       axios.get('/amend',{
         params:{
          StuNum,
          State,
          EmailAccount,
          Group
         }
       }).then(res=>{
       alert(res.data);
       axios.get(this.props.focus).then(res=>{
        this.setState({
           data:res.data
        })
      }).catch(err=>{
        throw err;
      })
       }).catch(err=>{
         throw err;
       })
     }
  }
  render() {
   const  columns=[
      {
        title: '姓名',
        dataIndex: 'peoplename',
        key: 'peoplename',
        width: '10%',
        ...this.getColumnSearchProps('peoplename'),
      },
      {
        title: '学号',
        dataIndex: 'studentnumber',
        key: 'studentnumber',
        width: '10%',
        ...this.getColumnSearchProps('studentnumber'),
      },
      {
        title: '班级',
        dataIndex: 'classname',
        key: 'classname',
        width: '10%',
        ...this.getColumnSearchProps('classname'),
      },
      {
        title: '邮箱',
        dataIndex: 'mailaccount',
        key: 'mailaccount',
        width: '10%',
        ...this.getColumnSearchProps('mailaccount'),
      },
      {
        title: '手机号',
        dataIndex: 'phone',
        key: 'phone',
        width: '10%',
        ...this.getColumnSearchProps('phone'),
      },
      {
        title: '面试进程',
        dataIndex: 'state',
        key: 'state',
        width: '10%',
        ...this.getColumnSearchProps('state'),
      },
      {
        title: 'Action',
        key: 'action',
        width: '40%',
        render:(text,record)=>{
          return (
                <Space size="middle">
                  <Button type="primary" onClick={ this.Pass(record)}>通过本轮面试并发送邮件</Button>
                </Space>
              )
        }
      },
    ];
    return (
      <div className='Show'>
        123
         <div className='ShowArea'>
        <Table columns={columns} dataSource={this.state.data} />;
      </div>
      </div>
    )
  }
}