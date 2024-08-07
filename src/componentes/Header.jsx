import React from 'react';
import '../estilos/header.css';
import PokeIco from '../assets/Pokemon.png';



export default function Header({obetenerBusqueda}) {

    return (
        <div className='navbar lg-body-tertiary' >
                <img className='PokeLogo' src={PokeIco} alt="LogoPokemon" />
                <input className="form-control me-2" type="search" placeholder="Busca Tu Pokemon" aria-label="Search"
                onChange={(e => obetenerBusqueda(e.target.value))}
                ></input>
        </div>
    )
}
