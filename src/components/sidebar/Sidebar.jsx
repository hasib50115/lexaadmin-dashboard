import React from 'react';
import './Sidebar.css';
import { LineStyle, Timeline, TrendingUp, PersonOutlineOutlined, Storefront, AttachMoney, BarChart, MailOutlined, DynamicFeedOutlined, ChatBubbleOutlineOutlined, Report, WorkOutline } from '@material-ui/icons';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <LineStyle className='sidebarIcon'/>
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className='sidebarIcon'/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp className='sidebarIcon'/>
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <PersonOutlineOutlined className='sidebarIcon'/>
                        Users
                    </li>
                    <li className="sidebarListItem">
                        <Storefront className='sidebarIcon'/>
                        Products
                    </li>
                    <li className="sidebarListItem">
                        <AttachMoney className='sidebarIcon'/>
                        Transactions
                    </li>
                    <li className="sidebarListItem">
                        <BarChart className='sidebarIcon'/>
                        Reports
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">
                        <MailOutlined className='sidebarIcon'/>
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <DynamicFeedOutlined className='sidebarIcon'/>
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubbleOutlineOutlined className='sidebarIcon'/>
                        Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">
                        <WorkOutline className='sidebarIcon'/>
                        Manage
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className='sidebarIcon'/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <Report className='sidebarIcon'/>
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar