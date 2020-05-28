import React, {Component} from 'react';
import {Sidebar} from './components/sidebar.jsx';
import {Articles} from './components/articles.jsx';
import {SearchedArticles} from './components/searchedArticles.jsx';

class App extends Component {

state = {

  execute:true,

  error:false,

  category:'general',

  country:'us',

  number: 10,

  src: false,

  data: false,

  api:'https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=7f7eb775aee84e0ab98d46c34aa949b9',

  startApi: () => {

    fetch(this.state.api, request.headers['Access-Control-Allow-Origin'] = '*')
    .then(response => response.json())
    .then(data => {

      this.setState({ data: data });

    }).catch(error=>{
      this.setState({ error: error })
    })
  },

}

handleSearch = (arr) => {
  this.setState({src: arr });
}

changeCountryApi = country => {
  this.setState({
    api:`https://newsapi.org/v2/top-headlines?country=${country}&category=${this.state.category}&apiKey=7f7eb775aee84e0ab98d46c34aa949b9`,
    country:country,
    data:false,
    src:false,
    number:10
   }, ()=>{ this.state.startApi() }
 ); 
}

changeCategoryApi = category => {
  this.setState({
    api:`https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${category}&apiKey=7f7eb775aee84e0ab98d46c34aa949b9`,
    category:category,
    data:false,
    src:false,
    number:10
  }, () => { this.state.startApi() }
 ); 
}

 start = () => {
  this.state.startApi();
  this.setState({execute:false})
 }

render(){

let {data, src, number, api, execute} = this.state;

if(execute){
  this.start();
}

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

    <main className='main'>

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

      data.status === 'error'  ?

      <span className='limit'> Error loading news </span> 

      :

      <p className='loading'>loading news...</p>  

      }

    </main>

  </div>

 );
}
}

export default App;

