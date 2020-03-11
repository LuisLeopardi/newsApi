import React from 'react';
import reactLogo from './img/reactLogo.png';

export const Articles = ({data, number}) => {

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