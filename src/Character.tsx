import React from 'react';

interface CharacterType {
    birth_year:  string;
    created:  string;
    edited:  string;
    eye_color:  string;
    films:  Array<string>;
    gender:  string;
    hair_color:  string;
    height:  string;
    homeworld:  string;
    mass:  string;
    name:  string;
    skin_color:  string;
    species:  Array<string>;
    starships:  Array<string>;
    url:  string;
    vehicles:  Array<string>;
}

interface CharacterProps{
	data: CharacterType;
}

const Character: React.FC<CharacterProps> = ( { data }) => {

    return (
        <div className="character">
            {data.name}
        </div>
    )
}

export default Character;