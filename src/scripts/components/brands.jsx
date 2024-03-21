import React from 'react';

import cocacola from '../../assets/brands/cocacola.png';
import haagdanz from '../../assets/brands/haagdanz.png';
import maggi from '../../assets/brands/maggi.png';
import nescafe from '../../assets/brands/nescafe.png';
// import nestea from '../../assets/brands/nestea.png';
import nestle from '../../assets/brands/nestle.png';
// import purina from '../../assets/brands/purina.png';
import perrier from '../../assets/brands/perrier.png';

const Brands = () => {
    return (
        <section className='brands'>
            <h3 className='brands__title u-mb-small'>Tus marcas favoritas</h3>
            <div className='brands__logos u-mt-medium'>
                {/*<img src={ purina } alt='Tu Marca favorita purina'/>*/}
                <img src={ haagdanz } alt='Tu Marca favorita purina'/>
                <img src={ maggi } alt='Tu Marca favorita purina'/>
                <img src={ nescafe } alt='Tu Marca favorita purina'/>
                <img src={ perrier } alt='Tu Marca favorita purina'/>
                <img src={ nestle } alt='Tu Marca favorita purina'/>
                <img src={ cocacola } alt='Tu Marca favorita purina'/>
                {/*<img src={ nestea } alt='Tu Marca favorita purina'/>*/}
            </div>
        </section>
    );
};

export default Brands;