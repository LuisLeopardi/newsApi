import React from 'react';

export const SearchFilter = ({data, src}) => {

  let arr = [];

  let arr2 = [];

  let join = [];

  let result = [];

  const search = (e) => {
  	
  	arr = data.filter(a=>{
  		return a.title.toLowerCase().includes(e.target.value.toLowerCase())
  	});

    arr2 = data.filter(a=>{
      return a.description.toLowerCase().includes(e.target.value.toLowerCase())
    });

    join = arr.concat(arr2);

    result = [...new Set(join)]

  	src(result)
  }

 return (

 	<div className='sidebar-filters centered'>

 		<h3 className='sidebar-headline'> Search news </h3>

      <input 
      onChange={search} 
      className='sidebar-input'
      placeholder='keyword'
      />

 	</div>

 )

}