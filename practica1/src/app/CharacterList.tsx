import { Character } from './types';
import CharacterCard from './CharacterCard';

type CharacterListProps = {
  characters: Character[];
};

function CharacterList({ characters }: CharacterListProps) {
  return (
    <>
      <h1 className="page-title">Star Wars API - Personajes</h1>
      
      <div className="character-grid">
        {
          characters.map((char, index) => (
            <CharacterCard key={index} character={char} />
          ))
        }
      </div>
    </>
  );
}

export default CharacterList;