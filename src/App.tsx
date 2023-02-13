import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Character from './Character';

const App : React.FC = () => {

  const [characters, setCharacters] = useState<any>([]);

  useEffect(() => {
	  getCharacters(1);
  }, []);

  const getCharacters = async (id : number) => {
    // Utilised Axios for API calls
    const apiResponse = await axios.get(`https://swapi.dev/api/people/${id}`);
    console.log(apiResponse.data);
    setCharacters(apiResponse.data);
    console.log(characters)
  };

	return (
		<div className="page">
      <Character data={characters} />
		</div>
	);
}

export default App;