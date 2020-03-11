import React from 'react';

export const Icon = ({ active, count, onClick, src, alt, setSidebar, sidebar, setChosen}) => {

  const handleSidebar = () => {

  	if (active) {

		setSidebar('sidebar');
		setChosen('');

  	} else {

  	 setSidebar('sidebar fullSize');
  	 onClick();

  	}

  }

  return (
	<img onClick={handleSidebar} className={active ? 'icon active' : 'icon'} src={src} alt={alt}/>
  );
};