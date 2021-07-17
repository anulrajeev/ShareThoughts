import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css'
function Sidebar() {
    const recentItem = function(topic){return(
        <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
        </div>

    )};

    const user= useSelector(selectUser);
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://i.pinimg.com/originals/af/8d/63/af8d63a477078732b79ff9d9fc60873f.jpg" alt=""/>
                <Avatar src={user.photoUrl} className='sidebar__avatar'>{user.email[0]}</Avatar>

                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>

            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                        <p> Who viewed you</p>
                        <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                <p>Views of your post</p>
                <p className="sidebar__statNumber">2,543</p>
                </div>
            </div>

            <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem("Reactjs")}
            {recentItem("Programming")}
            {recentItem("SoftwareEngineering")}
            {recentItem("Design ")}
            {recentItem("Developer")}

            </div>
        </div>
    )
}

export default Sidebar
