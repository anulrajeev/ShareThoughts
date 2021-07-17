import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import Home from '@material-ui/icons/Home';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Chat from '@material-ui/icons/Chat';
import { logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './Firebase';


function Header() {
    const user=useSelector(selectUser);
    const dispatch = useDispatch();
    const logoutofApp=()=>{
        if(user)
           alert('User Signed Out..');
        dispatch(logout());
        auth.signOut();
    };
    
    return (
        <div className="header">
           
            <div className="header__left">
                <img src="https://icons.iconarchive.com/icons/iconarchive/red-orb-alphabet/256/Letter-S-icon.png" alt=""/>
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder="Search"></input>
                </div>
            </div>
            <div className="header__right">
             <HeaderOptions Icon={Home} title="Home"/>
             
             <HeaderOptions Icon={ChatIcon} title="Messaging"/>
             <HeaderOptions Icon={NotificationsIcon } title="Notifications"/>
             <HeaderOptions avatar={true} title="Me"  onClick={logoutofApp} />
            </div>

           
          
        </div>
    )
}

export default Header
