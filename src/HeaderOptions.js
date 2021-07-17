import React from 'react'
import './HeaderOptions.css'
import { Avatar } from '@material-ui/core';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
function HeaderOptions({avatar, Icon, title, onClick}) {
    const user = useSelector(selectUser);
    return (
        <div onClick={onClick} className='headerOptions'>
        {Icon && <Icon className="headerOptions__icon" />} 
        {avatar && <Avatar src={user?.photoUrl} className='headerOptions__icon'>{user?.email[0]}</Avatar>}   
         <h6 className="headerOptions__title">{title}</h6>   
        </div>
    )
}

export default HeaderOptions;
