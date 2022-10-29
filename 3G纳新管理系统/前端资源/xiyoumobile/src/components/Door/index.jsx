import React, { Component } from 'react';
import { Route,Routes } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Android from '../../pages/HomePages/android';
import Mobile from '../../pages/HomePages/mobile';
import Server from '../../pages/HomePages/server';
import Web from '../../pages/HomePages/web';
import Ios from '../../pages/HomePages/ios';
export default class Door extends Component{
    render()
    {
        return(
            <div className='door'>
               <Sidebar/>
               <Routes>
                   <Route path='web-introduce' element={<Web group="web-introduce"/>}></Route>
                   <Route path='android-introduce' element={<Android group="android-introduce"/>}></Route>
                   <Route path='server-introduce' element={<Server group="server-introduce"/>}></Route>
                   <Route path='ios-introduce' element={<Ios group="ios-introduce"/>}></Route>
                   <Route path='*' element={<Mobile group="all-introduce"/>}></Route>
               </Routes>
            </div>
        )
    }
}