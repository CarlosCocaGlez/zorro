import React from 'react';

const Navigation = () => {
    return (
        <nav className='navigation'>
            <ul className='navigation__list'>
                <li className='navigation__list-isActive'>Inicio</li>
                <li>Nosotros</li>
                <li>Promociones</li>
                <li>Sucursales</li>
                <li>Noticias</li>
                <li>Facturación</li>
                <li>Contáctanos</li>
            </ul>
            <span className='navigation__tips'>
                <span className='material-symbols-outlined'>emoji_objects</span>
                <span className='navigation__tips-text'>Tips</span>
            </span>
        </nav>
    );
};

export default Navigation;