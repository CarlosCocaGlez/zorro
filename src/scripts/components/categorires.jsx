import React from 'react';

import brocoli from '../../assets/fruits/brocoli.png';
import cebolla from '../../assets/fruits/cebolla.png';
import hongos from '../../assets/fruits/hongos.png';
import lechuga from '../../assets/fruits/lechuga.png';
import mangos from '../../assets/fruits/mangos.png';
import naranja from '../../assets/fruits/naranja.png';
import shapSmall from '../../assets/fruits/shap-small.png';

const Categorires = () => {
    return (
        <section className='categories'>
            <header className='categories__header'>
                <h4 className='categories__subtitle u-mb-medium'>Nuestras categorías</h4>
                <div className='categories__main'>
                    <h2 className='categories__title'><span><strong>Zorro</strong> abarrotero</span></h2>
                </div>
            </header>
            <div className='categories__tags u-mt-medium'>
                <span className='categories__tags-isActive'>Frutas/Verduras</span>
                <span>Abarrotes</span>
                <span>Farmacia</span>
                <span>Vinos y Licores</span>
                <span>Hogar</span>
                <span>Cremeria</span>
            </div>
            <div className='fruits'>
                <div className='categories__cards u-mt-large'>
                    <div className='categories__cards-card'>
                        <div className='categories__cards-card-extras'>
                            <span className="material-symbols-outlined">
                                favorite
                            </span>
                            <span className="material-symbols-outlined">
                                shopping_cart_checkout
                            </span>
                            <span className="material-symbols-outlined">
                                open_in_full
                            </span>
                        </div>
                        <div className='categories__cards-card-imageContainer'>
                            <img
                                alt={ brocoli }
                                className='categories__cards-card-image'
                                src={ brocoli }
                            />
                            <img
                                alt='fruits'
                                className='categories__cards-card-imageSeparator'
                                src={ shapSmall }
                            />
                        </div>
                        <p className='categories__cards-card-name'>Brocolí</p>
                        <div className='categories__cards-card-prices'>
                            <span className='categories__cards-card-price'>
                                $50.00
                            </span>
                            <span className='categories__cards-card-subPrice'>
                                $65.00
                            </span>
                        </div>
                    </div>
                </div>
                <div className='categories__cards u-mt-large'>
                    <div className='categories__cards-card'>
                        <div className='categories__cards-card-extras'>
                            <span className="material-symbols-outlined">
                                favorite
                            </span>
                            <span className="material-symbols-outlined">
                                shopping_cart_checkout
                            </span>
                            <span className="material-symbols-outlined">
                                open_in_full
                            </span>
                        </div>
                        <div className='categories__cards-card-imageContainer'>
                            <img
                                alt={ cebolla }
                                className='categories__cards-card-image'
                                src={ cebolla }
                            />
                            <img
                                alt='fruits'
                                className='categories__cards-card-imageSeparator'
                                src={ shapSmall }
                            />
                        </div>
                        <p className='categories__cards-card-name'>Cebolla</p>
                        <div className='categories__cards-card-prices'>
                            <span className='categories__cards-card-price'>
                                $50.00
                            </span>
                            <span className='categories__cards-card-subPrice'>
                                $65.00
                            </span>
                        </div>
                    </div>
                </div>
                <div className='categories__cards u-mt-large'>
                    <div className='categories__cards-card'>
                        <div className='categories__cards-card-extras'>
                            <span className="material-symbols-outlined">
                                favorite
                            </span>
                            <span className="material-symbols-outlined">
                                shopping_cart_checkout
                            </span>
                            <span className="material-symbols-outlined">
                                open_in_full
                            </span>
                        </div>
                        <div className='categories__cards-card-imageContainer'>
                            <img
                                alt={ hongos }
                                className='categories__cards-card-image'
                                src={ hongos }
                            />
                            <img
                                alt='fruits'
                                className='categories__cards-card-imageSeparator'
                                src={ shapSmall }
                            />
                        </div>
                        <p className='categories__cards-card-name'>Hongos</p>
                        <div className='categories__cards-card-prices'>
                            <span className='categories__cards-card-price'>
                                $50.00
                            </span>
                            <span className='categories__cards-card-subPrice'>
                                $65.00
                            </span>
                        </div>
                    </div>
                </div>
                <div className='categories__cards u-mt-large'>
                    <div className='categories__cards-card'>
                        <div className='categories__cards-card-extras'>
                            <span className="material-symbols-outlined">
                                favorite
                            </span>
                            <span className="material-symbols-outlined">
                                shopping_cart_checkout
                            </span>
                            <span className="material-symbols-outlined">
                                open_in_full
                            </span>
                        </div>
                        <div className='categories__cards-card-imageContainer'>
                            <img
                                alt={ lechuga }
                                className='categories__cards-card-image'
                                src={ lechuga }
                            />
                            <img
                                alt='fruits'
                                className='categories__cards-card-imageSeparator'
                                src={ shapSmall }
                            />
                        </div>
                        <p className='categories__cards-card-name'>Lechuga</p>
                        <div className='categories__cards-card-prices'>
                            <span className='categories__cards-card-price'>
                                $50.00
                            </span>
                            <span className='categories__cards-card-subPrice'>
                                $65.00
                            </span>
                        </div>
                    </div>
                </div>
                <div className='categories__cards u-mt-large'>
                    <div className='categories__cards-card'>
                        <div className='categories__cards-card-extras'>
                            <span className="material-symbols-outlined">
                                favorite
                            </span>
                            <span className="material-symbols-outlined">
                                shopping_cart_checkout
                            </span>
                            <span className="material-symbols-outlined">
                                open_in_full
                            </span>
                        </div>
                        <div className='categories__cards-card-imageContainer'>
                            <img
                                alt={ mangos }
                                className='categories__cards-card-image'
                                src={ mangos }
                            />
                            <img
                                alt='fruits'
                                className='categories__cards-card-imageSeparator'
                                src={ shapSmall }
                            />
                        </div>
                        <p className='categories__cards-card-name'>Mangos</p>
                        <div className='categories__cards-card-prices'>
                            <span className='categories__cards-card-price'>
                                $50.00
                            </span>
                            <span className='categories__cards-card-subPrice'>
                                $65.00
                            </span>
                        </div>
                    </div>
                </div>
                <div className='categories__cards u-mt-large'>
                    <div className='categories__cards-card'>
                        <div className='categories__cards-card-extras'>
                            <span className="material-symbols-outlined">
                                favorite
                            </span>
                            <span className="material-symbols-outlined">
                                shopping_cart_checkout
                            </span>
                            <span className="material-symbols-outlined">
                                open_in_full
                            </span>
                        </div>
                        <div className='categories__cards-card-imageContainer'>
                            <img
                                alt={ naranja }
                                className='categories__cards-card-image'
                                src={ naranja }
                            />
                            <img
                                alt='fruits'
                                className='categories__cards-card-imageSeparator'
                                src={ shapSmall }
                            />
                        </div>
                        <p className='categories__cards-card-name'>Naranja</p>
                        <div className='categories__cards-card-prices'>
                            <span className='categories__cards-card-price'>
                                $50.00
                            </span>
                            <span className='categories__cards-card-subPrice'>
                                $65.00
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Categorires;