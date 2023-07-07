import React from 'react';
import {images} from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img">
      <img src={images.chef} alt="chef" />
    </div>
    
    <div className="app__wrapper_info">
      <SubHeading title="Chef's World"/>
      <h1 className="headtext__cormorant">What we Believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="" />
          <p className="p__opensans">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <p className='p__opensans'>Fugiat tempore consectetur officia labore impedit, nulla natus dolores! Est animi nemo eius quibusdam iure suscipit, soluta fugit tenetur distinctio, unde voluptas.</p>
      </div>
      
      <div className="app__chef-sign">
        <p>Kevin Lorem</p>
        <p className="p__opensans">Chef and founder</p>
        <img src={images.sign} alt="chef_sign" />
      </div>
    </div>

  </div>
);

export default Chef;
