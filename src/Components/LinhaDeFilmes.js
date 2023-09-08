import React from 'react';
import './LinhaDeFilmes.css';

export default ({title, items}) => {
     return(
        <div className='LinhaDeFilmes'>
            <h2>{title}</h2>
            <div className = "LinhaDeFilmes--listarea">
                <div className="LinhadeFilmes--list">
                    {items.results.length > 0 && items.results.map((item,key)=>(
                      <div key={key}className="LinhaDeFilmes--item">
                         <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                      </div>
                ))}  
                </div>
            </div>  
        </div>
     );
}