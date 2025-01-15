import React, { useEffect, useState } from 'react';
import { FaCog } from 'react-icons/fa';
import './style.scss';
import { theme } from '../../Data';
import ColorSwitcherItem from './ColorSwitcherItem';

const getStorageStyle = (): string => {
  let color = '#FBD499';
  if (localStorage.getItem('color')) {
    color = localStorage.getItem('color') || '#FBD499'; 
  }
  return color; 
};


const ColorSwitch = () => {

  const [showSwitcher, setShowswitcher] = useState(false);
  const [color, setColor] = useState(getStorageStyle());

  const changeColor = (color: string) =>{
    setColor(color);
  }

  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', color);
    localStorage.setItem('color', color);
  }, [color]);

  return (
    <>
      <div>
        <div className={`${showSwitcher ? 'show__switcher' : ''} style__switcher`}>
          <div className="style__switcher-toggler" onClick={() => setShowswitcher(!showSwitcher)}>
            <FaCog />
          </div>
          <h3 className="style__switcher-title">Style Switcher</h3>
          <div className="style__switcher-items">
            {theme.map((theme, index) => {
              return <ColorSwitcherItem key={index} {...theme} changeColor={changeColor} />
            })}
          </div>
          <div className="style__switcher-close" onClick={() => setShowswitcher(!showSwitcher)}>&times;</div>
        </div>
      </div>
    </>
  );
};

export default ColorSwitch;
