import { Character } from './types';

type Props = {
  character: Character;
};

function CharacterCard({ character }: Props) {
  return (
    <div className="character-card">
      <h2 className="character-name">{character.name}</h2>
      
      <p className="character-detail">
        <strong>Género:</strong> {character.gender}
      </p>
      
      <p className="character-detail">
        <strong>Año de nac.:</strong> {character.birth_year}
      </p>
    </div>
  );
}

export default CharacterCard;