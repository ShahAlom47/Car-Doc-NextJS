import React from 'react';
import Banner from './banner/Banner';
import OurServices from './OurServices'

const HomePage  = () => {
    return (
        <div className=' max-w-7xl m-auto' >
          <Banner></Banner>
          <OurServices></OurServices>
        </div>
    );
};

export default HomePage ;