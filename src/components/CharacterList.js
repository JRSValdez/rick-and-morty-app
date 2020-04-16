import React from 'react';

import Character from './Character';

const CharacterList = props => {

  return (
    <div className="row row-cols-1 row-cols-md-4">
      {props.characters.map(character => {
        return <Character
          key={character.id}
          character={character}
          handleModal={props.handleModal}
        />
      })}
    </div>
  );

}

export default CharacterList;