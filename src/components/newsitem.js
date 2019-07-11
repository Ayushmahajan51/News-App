import React from 'react';
import Snippets from '../images/snippets.png';
const NewsItem = ({New}) => {
    return (
        <div className="ui raised red card">
            <div className="content" >
                <img alt="..." src={Snippets} className="right floated avatar bodered"/>
                <a className="header" href={New.url} >
                    {New.title}
                </a>
                
                <div className="description">
                    {New.description}
                </div>
            </div>
        </div>
    );
}
export default NewsItem; 