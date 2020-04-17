import React from 'react';

import rick_morty_logo from '../images/rick_and_morty.svg';

const Header = (props) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-8 px-sm-0 px-md-4 mx-auto'>
          <img
            src={rick_morty_logo}
            alt='logo'
            className='img-fluid'
          />
        </div>
      </div>
    </div>
  );
}

export default Header;