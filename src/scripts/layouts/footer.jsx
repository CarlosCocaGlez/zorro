import React from 'react';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__grid'>
                <div>
                    <h4 className='footer__grid__header header-quaternary u-mb-small'>
                        Abarrotes el <strong>Zorro</strong>
                    </h4>
                    <p className='footer__grid__paragraph u-mt-medium'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda fuga perferendis perspiciatis sapiente voluptatum? Accusantium consequatur dicta facilis obcaecati soluta!
                    </p>
                </div>
                <div>
                    <h4 className='footer__grid__header header-quaternary u-mb-small'>
                        Contacto
                    </h4>
                    <ul className='footer__grid__unorderList u-mt-medium'>
                        <li>
                            <span className='material-symbols-outlined'>
                                location_on
                            </span>
                            Vialidad de la Barranca No. 6, Huixquilucan, Estado de México.
                        </li>
                        <li>
                            <span className='material-symbols-outlined'>
                                call
                            </span>
                            Clientes. 5245-2750
                        </li>
                        <li>
                            <span className='material-symbols-outlined'>
                                communication
                            </span>
                            Proveedores. 5245-2720
                        </li>
                        <li>
                            <span className='material-symbols-outlined'>
                                mail
                            </span>
                            atencionzorro@asezor.com
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className='footer__grid__header header-quaternary u-mb-small'>
                        Información
                    </h4>
                    <ul className='footer__grid__unorderList u-mt-medium'>
                        <li>Acerca de nostros</li>
                        <li>Top compradores</li>
                        <li>Nuevas ubicaciones</li>
                        <li>Nuestro blog</li>
                    </ul>
                </div>
                <div>
                    <h4 className='footer__grid__header header-quaternary u-mb-small'>
                        Redes sociales
                    </h4>
                    <ul className='footer__grid__unorderList u-mt-medium'>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Youtube</li>
                        <li>Twitter</li>
                        <li>Pinterest</li>
                    </ul>
                </div>
            </div>
            <div className='footer__copyright'>
                &copy; 2024 <a href='https://github.com/CarlosCocaGlez' target='_blank'>gitHub</a>, hecho con ♥ por Carlos Coca
            </div>
        </footer>
    );
};

export default Footer;