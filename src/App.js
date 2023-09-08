import React , {useEffect, useState} from 'react';
import './App.css';
import Tmdb from './Tmdb';
import LinhaDeFilmes from './Components/LinhaDeFilmes';
import FilmeEmDestaque from './Components/FilmeEmDestaque';
import Cabecalho from './Components/Cabecalho';


export default()=>{
  const [movieList, setMovieList] = useState([]);
  const[featuredData, setFeaturedData] = useState(null);
  const[blackCabecalho,setBlackCabecalho]= useState(false);

  useEffect(()=> {
    const loadAll = async ()=> {
      //pega  a lista de filmes toda 
      let list = await Tmdb.getHomeList();
      setMovieList(list) ;


      //Pegando o filme em destaque
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random()*(originals[0].items.results.length -1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id,'tv');
      setFeaturedData(chosenInfo);
      
   
     } 
    loadAll();
 },[]);
  

 useEffect(()=>{
    const scrollListener = ()=>{
      if(window.scrollY>10){
        setBlackCabecalho(true);
      }else{
          setBlackCabecalho(false);
        }
        
    }
    window.addEventListener('scroll', scrollListener);
    return()=>{
      window.removeEventListener('scroll', scrollListener)
    }
  },[]);
  return  <div className="page">
            <h1>OLA REACT</h1>
            <Cabecalho black={blackCabecalho}/>

            { featuredData &&
              <FilmeEmDestaque item={featuredData}/> 
            }

            <section className=" lists">
              {movieList.map((item,key)=>( 
                <LinhaDeFilmes key={key} title={item.title} items={item.items} />
              ))}
            </section>
            <footer>
              feito com <span role="img" aria-label="coração">😍</span> pela B7web<br/>
              Direitos de imagem para Netflix<br/>
              Dados pegos do site Themoviedb.org
            </footer> 
            <div className="loading"></div>
          </div>
}   
      

/* 


const [movieList, setMovieList] = useState([]);
  const[featuredData, setFeaturedData] = useState(null);
  const[blackCabecalho,setBlackCabecalho]= useState(false);

 
  useEffect(()=> {
     const loadAll = async ()=> {
       //pega  a lista de filmes toda 
       let list = await Tmdb.getHomeList();
       setMovieList(list) ;
 

       //Pegando o filme em destaque
       let originals = list.filter(i=>i.slug === 'originals');
       let randomChosen = Math.floor(Math.random()*(originals[0].items.results.length -1));
       let chosen = originals[0].items.results[randomChosen];
       let chosenInfo = await Tmdb.getMovieInfo(chosen.id,'tv');
       setFeaturedData(chosenInfo);
       
    
      } 
     loadAll();
  },[]);

  useEffect(()=>{
    const scrollListener = ()=>{
       if(window.scrollY>10){
        setBlackCabecalho(true);
       }else{
          setBlackCabecalho(false);
        }
        
    }
    window.addEventListener('scroll', scrollListener);
    return()=>{
      window.removeEventListener('scroll', scrollListener)
    }
  },[]);
  return(
    <div className="page">
      <Cabecalho black={blackCabecalho}/>
      { featuredData &&
        <FilmeEmDestaque item={featuredData}/> 
      }
      <section className=" lists">
         {movieList.map((item,key)=>( 
          <LinhaDeFilmes key={key} title={item.title} items={item.items} />
         ))}
      </section>
      <footer>
        feito com <span role="img" aria-label="coração">😍</span> pela B7web<br/>
        Direitos de imagem para Netflix<br/>
        Dados pegos do site Themoviedb.org
      </footer>
      <div className="loading"></div>
      <img src=" " alt = "Carregando"/>
    </div> 
  )

*/