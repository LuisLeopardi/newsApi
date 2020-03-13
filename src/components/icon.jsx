import React from 'react';
import arrow from './img/arrow.svg';

export const Icon = ({ chosen, active, count, onClick, src, alt, setSidebar, sidebar, setChosen}) => {

  const handleSidebar = () => {

  	if (active) {

		setSidebar('sidebar');
		setChosen('');

  	} else {

  	 setSidebar('sidebar fullSize');
  	 onClick();

  	}

  }

  const exit = () => {
    setSidebar('sidebar');
    setChosen('');

  }

  return (
	<img 
  onClick={alt === arrow ? exit : handleSidebar} 
  className={chosen === arrow ? 'icon' : active ? 'icon active' : 'icon'} 
  src={src} 
  alt={alt}/>
  );
};