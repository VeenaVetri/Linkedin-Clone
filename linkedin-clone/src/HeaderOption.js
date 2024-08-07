import Avatar from '@mui/material/Avatar';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/user/userSlice';
import './HeaderOption.css';

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div className='headerOption' onClick={onClick}>
      {Icon && <Icon className='headerOption_Icon' />}
      {avatar && (
        <Avatar src={user?.photoURL} className='headerOption_Icon'>
          {user?.email[0]}
        </Avatar>
      )}
      <h3 className='headerOption_title'>{title}</h3>
    </div>
  );
}

export default HeaderOption;
