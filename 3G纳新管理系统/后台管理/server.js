const express = require('express');//引入express框架
const mysql = require('mysql');//引入mysql
const app = express();
const fs = require('fs');
const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
     service: "qq", //邮箱类型 例如service:'163'
     secure: true, //是否使用安全连接，对https协议的
     port: 6000, //qq邮件服务所占用的端口
     auth: {
         user: "2271967580@qq.com",//开启SMTP的邮箱，发件人
         pass: "xmkuydahmfcheaga"// qq授权码
     }
})
let db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"020804",
    port:"3306",
    database:"3g"
 });
app.use('/schedule',(req,res)=>{
    const {studentnumber} = req.query;
    let str = 'SELECT * FROM `people` WHERE '+'studentnumber='+studentnumber;
    db.query(str,(err,data)=>{
        if(err)
        {
            throw err;
        }
        else
        {
            res.send(data);
        }
    })
})

app.use('/Total',(req,res)=>{
    let str = 'SELECT * FROM `people`';
    db.query(str,(err,data)=>{
        if(err) throw err;
        else res.send(data);
    })
})
//访问web前端
app.use('/Web',(req,res)=>{
    let str = 'SELECT * FROM `people` WHERE focusgroup='+"'"+'web前端'+"'";
    db.query(str,(err,data)=>{
        if(err) throw err;
        else res.send(data);
    })
})
//访问后台
app.use('/Server',(req,res)=>{
    let str = 'SELECT * FROM `people` WHERE focusgroup='+"'"+'server后台'+"'";
    db.query(str,(err,data)=>{
        if(err) throw err;
        else res.send(data);
    })
})
//访问安卓
app.use('/Android',(req,res)=>{
    let str = 'SELECT * FROM `people` WHERE focusgroup='+"'"+'android安卓'+"'";
    db.query(str,(err,data)=>{
        if(err) throw err;
        else res.send(data);
    })
})
//访问后台
app.use('/Ios',(req,res)=>{
    let str = 'SELECT * FROM `people` WHERE focusgroup='+"'"+'ios'+"'";
    db.query(str,(err,data)=>{
        if(err) throw err;
        else res.send(data);
    })
})

app.use('/amend',(req,res)=>{
    const {StuNum,State,EmailAccount,Group} = req.query;
    let NextState = State*1 + 1;
    let str = 'update `people` set state='+"'"+NextState+"'"+'where studentnumber='+"'"+StuNum+"'";
    let prestate = State*1;
    let state='';
    let emailstr = '';
    if(prestate === 1)
    {
         state='第一轮面试';
         emailstr='恭喜您通过'+state+'下一轮面试将在2022年2月17日,请提前做好准备';
    }
    else if(prestate===2)
    {
        state='第二轮面试';
        emailstr='恭喜您通过'+state+'下一轮面试将在2022年2月18日,请提前做好准备';
    }
    else
    {
        emailstr='恭喜您通过所有面试,欢迎您加入移动应用开发兴趣小组'+Group+'组!'+'请于2022年2月19日晚8点到ff105报道';
    }
    let options = {
        from: '2271967580@qq.com', //发送方
        to:EmailAccount ,//接收方
        subject: '移动应用开兴趣小组',//邮件主题
        text: emailstr,//邮件正文
    }
    transporter.sendMail(options, (err, info) => {
        if (err) {
            res.send('抱歉,当前服务器网络异常,请联系管理员,稍后再试!');
            throw err;
        } else {
            db.query(str,(err,data)=>{
                if(err){
                    res.send(false);
                    throw err;
                }
            });
            res.send('发送邮件成功!')
        }
    })
})

app.use('/message',(req,res)=>{
    // console.log(req.query);
    const {group} = req.query;
    let str ="./message/" + group+".txt";
    let data = fs.readFile(str,'utf-8',(err,data)=>{
        if(err) throw err;
        else res.send(data.toString());
    })
})
//报名注册
app.use('/singUp',(req,res)=>{
    let {studentnumber,name,classname,email,phone,grade,major,group} = req.query;
    var str='INSERT INTO `people`(studentnumber,peoplename,phone,mailaccount,focusgroup,classname,state) VALUES( '+"'" +
    studentnumber+"'"+','+"'"+name+"'"+','+"'"+phone+"'"+','+"'"+email+"'"+','+"'"+group+"'"+','+"'"+classname+"'"+','+"'"+1+"'"+')';
    db.query(str,(err,data)=>{
        if(err)
        {
            console.log(err);
        }
    })
    res.send('提交成功');
})

app.use('/vserify',(req,res)=>{
   const {focus} = req.query
   let str = 'SELECT '+ focus+' FROM `people` WHERE '+ focus;
   db.query(str,(err,data)=>{
       if(err)
       {
           throw err;
       }
       else
       {
           res.send(data);
       }
   })
})

app.listen(4000,()=>{
    console.log('正在访问4000');
})
