import React from 'react';

import rick_morty_logo from '../images/rick_and_morty.svg';

const Header = (props) => {
  return (
    <React.Fragment>
      <div className='text-center mb-4'>
        <img src={rick_morty_logo} alt='logo' height="200px" className="mx-auto" />
      </div>
    </React.Fragment>
  );
}

export default Header;