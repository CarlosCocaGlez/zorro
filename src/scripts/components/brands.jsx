import React from 'react';

import purina from '../../assets/purina.png';

const Brands = () => {
    return (
        <section className='brands'>
            <h3 className='brands__title u-mb-small'>Tus marcas favoritas</h3>
            <div className='brands__logos u-mt-medium'>
                <img src={ purina } alt='Tu Marca favorita purina'/>
                <img src={ purina } alt='Tu Marca favorita purina'/>
                <img src={ purina } alt='Tu Marca favorita purina'/>
                <img src={ purina } alt='Tu Marca favorita purina'/>
                <img src={ purina } alt='Tu Marca favorita purina'/>
            </div>
        </section>
    );
};

export default Brands;