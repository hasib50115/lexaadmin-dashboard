import React from 'react';
import './WidgetSm.css';
import {Visibility} from '@material-ui/icons';

const WidgetSm = () => {
  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
              <img src="https://i.ibb.co/sC5kQsq/profile3.jpg" alt="" className="widgetSmImg" />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">Amaya</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className='widgetSmIcon'/>
                Display
              </button>
            </li>
            <li className="widgetSmListItem">
              <img src="https://i.ibb.co/c3X9pVG/Portrait-de-Carina-Saraiva-ralis-par-la-photographe-Laurine-Mottet-dans-son-studio-photo-proche-du-c.jpg" alt="" className="widgetSmImg" />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">Anna Keller</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className='widgetSmIcon'/>
                Display
              </button>
            </li>
            <li className="widgetSmListItem">
              <img src="https://i.ibb.co/TKzCVwd/profile2.jpg" alt="" className="widgetSmImg" />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">Vivek Mishra</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className='widgetSmIcon'/>
                Display
              </button>
            </li>
            <li className="widgetSmListItem">
              <img src="https://i.ibb.co/HqBtVnb/profile1.jpg" alt="" className="widgetSmImg" />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">Sujeet Kumar</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className='widgetSmIcon'/>
                Display
              </button>
            </li>
        </ul>
    </div>
  )
}

export default WidgetSm