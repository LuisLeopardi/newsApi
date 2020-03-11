import React, {Component} from 'react';
import {Sidebar} from './components/sidebar.jsx';
import {Articles} from './components/articles.jsx';
import {SearchedArticles} from './components/searchedArticles.jsx';

class App extends Component {

state = {

  category:'general',

  country:'us',

  number: 10,

  main: 'main',

  src: false,

  data: false,

  api:'http://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=7f7eb775aee84e0ab98d46c34aa949b9',

  startApi: () => {

    fetch(this.state.api)
    .then(response => response.json())
    .then(data => {

      this.setState({ data: data });

    })
  },

}

handleSearch = (arr) => {
  this.setState({src: arr });
}

changeCountryApi = (id) => {
  this.setState({api:`http://newsapi.org/v2/top-headlines?country=${id}&category=${this.state.category}&apiKey=7f7eb775aee84e0ab98d46c34aa949b9`})
  this.setState({country:id});
}

changeCategoryApi = (id) => {
  this.setState({api:`http://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${id}&apiKey=7f7eb775aee84e0ab98d46c34aa949b9`})
  this.setState({category:id});
}

render(){

let {data, src, main, number, startApi} = this.state;

startApi();

window.addEventListener('scroll', ()=>{

  const D = document;
  
  let bodyHeight = Math.max(
    D.body.scrollHeight, D.documentElement.scrollHeight,
    D.body.offsetHeight, D.documentElement.offsetHeight,
    D.body.clientHeight, D.documentElement.clientHeight
  );

  if (window.innerHeight + window.scrollY === bodyHeight) {
    this.setState({number: number + 10 })
  } else {
    return;
  }

});

return (

  <div id='wrap'>

    <Sidebar 
    data={data.articles} 
    src={this.handleSearch} 
    changeCountryApi={this.changeCountryApi}
    changeCategoryApi={this.changeCategoryApi}
    />

    <main className={main} onClick={this.test}>

      {

      src && data.articles ? 
      <SearchedArticles 
      data={src}
      /> :

      data.articles ? 
      <Articles 
      data={data} 
      number={number} 
      load={this.load}
      /> :

      data.status === 'error' ?
      <span className='limit'> limit reached </span> 

      :

      <span className='loading'> loading news </span>  

      }

    </main>

  </div>

 );
}
}

export default App;
