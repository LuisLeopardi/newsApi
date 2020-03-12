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

  api:'https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=7f7eb775aee84e0ab98d46c34aa949b9',

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

changeApi = (country, category) => {

  this.setState({src:false});
  this.setState({number:10});

 if (country) {
  this.setState({api:`https://newsapi.org/v2/top-headlines?country=${country}&category=${this.state.category}&apiKey=7f7eb775aee84e0ab98d46c34aa949b9`})
  this.setState({country:country});
 }

 if (category) {
  this.setState({api:`https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${category}&apiKey=7f7eb775aee84e0ab98d46c34aa949b9`})
  this.setState({category:category});
 }

 this.state.startApi()

}

render(){

let {data, src, main, number, startApi, api} = this.state;

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
    changeApi={this.changeApi}
    />

    <main className={main}>

      {

      src && data.articles ? 
      <SearchedArticles 
      data={src}
      /> :

      data.articles ? 
      <Articles 
      api={api}
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

