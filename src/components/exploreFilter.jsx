import React from 'react';
import business from './img/categories/business.svg';
import entertainment from './img/categories/entertainment.svg';
import general from './img/categories/general.svg';
import health from './img/categories/health.svg';
import science from './img/categories/science.svg';
import sports from './img/categories/sports.svg';
import technology from './img/categories/technology.svg';

export const ExploreFilter = ({changeCategoryApi, src}) => {

 const categories = [ 'business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology' ];
 const images = [business, entertainment, general, health, science, sports, technology];

 const api = (e) => {
 	src(false);
 	changeCategoryApi(e.target.id);
 }

 return (

 	<div className='sidebar-filters'>

 		<h3> Explore diferent categories </h3>

 		<ul className='sidebar-grid'>
 			{
 			  categories.map( (c,i) => 
 			  	<li onClick={api} 
 			  	className='sidebar-item item-end'
 			  	key={c} 
 			  	id={c}> 
 			  	<img src={images[i]} alt={i} className='margin-left'/>
 			  	{c} 
 			  	</li> )
 			}
 		</ul>

 	</div>

 )

}