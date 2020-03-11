import React from 'react';

export const SearchedArticles = ({data}) => {

return (

 data.map(articles => 

  <article key={articles.title} style={{ backgroundImage: "url(" + articles.urlToImage + ")" }}>

   <h1> {articles.title} </h1> 

   <p> {articles.description} </p>

   <div className='article-footer'>

    <p> Source {articles.source.name} </p>

    <p> Published at {articles.publishedAt} </p>
            
   </div>

  </article> 

)
)
}