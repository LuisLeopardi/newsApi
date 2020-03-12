import React, {useState} from 'react';
import info from './img/info.svg';
import flag from './img/flag.svg';
import lens from './img/lens.svg';
import compass from './img/compass.svg';
import {Icon} from './icon.jsx';
import {SearchFilter} from './searchFilter.jsx';
import {ExploreFilter} from './exploreFilter.jsx';
import {CountryFilter} from './countryFilter.jsx';
import {Atribution} from './atribution.jsx';

export const Sidebar = ({data, src, changeApi}) => {

  const [chosen, setChosen] = useState();
  const [sidebar, setSidebar] = useState('sidebar');
  const icons = [lens, compass, flag, info];

  return (

    <div className = { /*data ? */sidebar /*: 'none'*/}>

		<div className='sidebar-content'> 
			{ 
				chosen === lens ?  
				<SearchFilter data={data} src={src}/> :
				chosen === compass ?
				<ExploreFilter changeApi={changeApi}/> :
				chosen === flag ?
				<CountryFilter changeApi={changeApi}/> :
				<Atribution/> 
			} 
		</div>

		<nav>
		  {icons.map(icons => 
	       <Icon
	         src = {icons}
	         key = {icons}
	         alt = {icons}
	         active = {chosen === icons}
             onClick = {() => setChosen(icons)}
             setSidebar = {setSidebar}
             sidebar = {sidebar}
             setChosen = {setChosen}
	       />
	      )}
		</nav>

    </div>
  );
};
