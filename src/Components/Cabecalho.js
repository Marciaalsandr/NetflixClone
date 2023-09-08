import React from 'react'; 
import './Cabecalho.css';

export default ({black}) =>{
    return(
        <header className={black? 'black':''}>
            <div className="header--logo">
                <a href="/">
                      <img src="https://www.caviarcriativo.com/significados-da-marca-netflix/"/>
                </a>;
            </div>
            <div className="header--user">
                <a href="/">
                    //<img src="https://br.freepik.com/vetores-premium/homem-perfil-caricatura_5321649.htm" alt="Usuário"/>

                </a>
            </div>
        </header>
    )
}