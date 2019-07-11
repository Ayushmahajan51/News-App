import React from 'react';
import NewsItem from './newsitem';

const NewsList =({News}) =>{
    const renderedList = News.map((New) => {
        return  ( 
        <NewsItem key={New.url}  New={New}/>
        );    

   });
    return (
        <div className="ui two stackable cards" > 
           {renderedList}
        </div>
    )
}

export default NewsList;