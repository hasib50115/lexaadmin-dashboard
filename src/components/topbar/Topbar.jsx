import React from 'react';
import './Topbar.css';
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">
                    lexaadmin
                </span>
            </div>            
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings />
                </div>
                <img src="https://i.ibb.co/9TCg0vz/lexaadmin-profile-img.png" alt="" className="topAvatar" />
            </div>            
        </div>
    </div>
  )
}
