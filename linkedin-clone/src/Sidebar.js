import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'
import avatarBG from './gradienta.jpg'
import { useSelector } from 'react-redux'
import { selectUser } from './features/user/userSlice'
function Sidebar() {

    const user = useSelector(selectUser)

    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className='sidebar'>
            <div className="sidebar_top">
                <img src={avatarBG} alt="" />
                <Avatar src={user.photoURL} className='sidebar_Avatar'>
                    {user?.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar_stats">
                <div className='sidebar_stat'>
                    <p>Who's viewed your profile</p>
                    <p className="sidebar_statNumber">4,248</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on post</p>
                    <p className="sidebar_statNumber">2,654</p>
                </div>
            </div>

            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('softwareenineering')}
                {recentItem('fullstack')}
                {recentItem('javascript')}
                {recentItem('redux')}
            </div>
            
        </div>
    )
}

export default Sidebar