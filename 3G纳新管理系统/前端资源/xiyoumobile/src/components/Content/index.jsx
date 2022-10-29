import React, { Component } from 'react';
import { Route,Routes } from 'react-router-dom';
import From from '../../pages/SingUp';
import Schedule from '../../pages/schedule';
import Home from '../../pages/Home';
import Android from '../../pages/android';
import Web from '../../pages/web';
import Ios from '../../pages/ios';
import Server from '../../pages/server';
import Total from '../../pages/total';
import Show from '../show';
import ShowSchedule from '../ShowSchedule';
export default class Content extends Component{
    render()
    {
        return(
            <div className='Content'>
                 <Routes>
                     <Route path='/singUp' element={<From/>}></Route>
                     <Route path='/schedule' element={<Schedule/>}></Route>
                     <Route path='/all-introduce' element={<Home focus="web-introduce"/>}></Route>
                     <Route path='/logintotal' element={<Total/>}></Route>
                     <Route path='/loginweb' element={<Web/>}></Route>
                     <Route path='/loginserver' element={<Server/>}></Route>
                     <Route path='/loginandroid' element={<Android/>}></Route>
                     <Route path='/loginios' element={<Ios/>}></Route>
                     <Route path='/web' element={<Show focus='/Web'/>}></Route>
                     <Route path='/server' element={<Show focus='/Server'/>}></Route>
                     <Route path='/android' element={<Show focus='/Android'/>}></Route>
                     <Route path='/ios' element={<Show focus='/Ios'/>}></Route>
                     <Route path='/total' element={<Show focus='/Total'/>}></Route>
                     <Route path='*' element={<Home focus="web-introduce"/>}></Route>
                 </Routes>
            </div>
        )
    }
}