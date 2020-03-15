import React, {useState} from 'react';
import info from './img/info.svg';
import flag from './img/flag.svg';
import lens from './img/lens.svg';
import compass from './img/compass.svg';
import arrow from './img/arrow.svg';
import {Icon} from './icon.jsx';
import {SearchFilter} from './searchFilter.jsx';
import {ExploreFilter} from './exploreFilter.jsx';
import {CountryFilter} from './countryFilter.jsx';
import {Atribution} from './atribution.jsx';


export const Sidebar = ({data, src, changeCountryApi, changeCategoryApi}) => {

  const [chosen, setChosen] = useState();
  const [sidebar, setSidebar] = useState('sidebar');
  const icons = [compass, flag, info];

  if(sidebar==='sidebar fullSize'){
  	icons.push(arrow)
  	
  }

  return (

    <div className = {sidebar}>

		<div className='sidebar-content'> 
			{ 
				chosen === compass ?
				<ExploreFilter changeCategoryApi={changeCategoryApi}/> :
				chosen === flag ?
				<CountryFilter changeCountryApi={changeCountryApi}/> :
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
	         chosen = {chosen}
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
