import React  from 'react';
import './FilmeEmDestaque.css';

export default ({item})=>{ 
    let firstDate= new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres){
        genres.push(item.genres[i].name);
    }
    
    return(
        //aplicar responsividade  apartir das 1:29 minutos o que foi aplicado não estaá asurtir efeito 
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition:'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path}))`
        }}>  
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name} </div>
                    <div className="featured--info"></div>
                       <div className="featured--points">{item.vote_average} pontos
                       <div className="feature--year">{firstDate.getFullyear()}</div>  
                       <div className="feature--sessons">{item.number_of_sessons} temporada{item.number_of_sessons !==1 ?'s': ' '}</div>
                    </div>
                <div className="featured--description">{item.overview}</div>
                <div className="featured--buttons">
                    <a href={`/watch/${item.id}`} className="featured--watchbutton">Assistir</a>
                    <a href={`/list/add/${item.id}`}className="featured--mylistbutton">Minha Lista</a>
                </div>
                <div className="featured--genres"><strong>Gêneros:</strong>{genres.join(',')}</div>
                </div>
            </div>
        </section>
    );
} 