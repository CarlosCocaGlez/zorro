import React from 'react';

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
            <div className='categories__cards u-mt-large'>
                <div className='categories__cards-card'>

                </div>
            </div>

        </section>
    );
};

export default Categorires;