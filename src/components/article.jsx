import React, {Component} from 'react';
import reactLogo from './img/reactLogo.png';

export class Article extends Component {

constructor (props){
    super(props);
    this.state = 
    {
    	data: props.data,
    	api: props.api,
    };
}

/*shouldComponentUpdate (nextProps, nextState){
	if (nextState.api === this.state.api){
	    return false
	} else {
		return true
	}
}*/

render(){

 const {data} = this.state;

 const {number} = this.props;	

 return (

	data.articles.slice(0,number).map(articles=>

	<a href={articles.url} className='articles-url'> 

	<article 
  	 key={articles.title} 
   	 style= {articles.urlToImage ? 
   	 { backgroundImage: "url(" + articles.urlToImage + ")" }
   	 :
   	 { backgroundImage: "url(" + reactLogo + ")" }
   	 }>

     <h1> {articles.title} </h1> 

     <p className='article-description'> {articles.description} </p>

     <div className='article-footer'>

      <p> Source {articles.source.name} </p>

      <p> Published at {articles.publishedAt} </p>
            
     </div>

    </article>

 </a>
)
)
}
}