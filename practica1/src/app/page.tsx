'use client';

import { useState, useEffect } from 'react';
import { Character, ApiResponse } from './types';
import CharacterList from './CharacterList';
import Loader from './Loader';
import ErrorMsg from './Errormsg';

export default function Practica1App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const [nextUrl, setNextUrl] = useState<string | null>('https://swapi.dev/api/people/');
  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  const fetchCharacters = async (url: string, isPagination: boolean = false) => {
    try {
      if (isPagination) {
        setLoadingMore(true);
      } else {
        setLoading(true);
      }
      setError(null);

      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Fallo en la petición: ${response.status}`);
      }

      const data: ApiResponse = await response.json();

      setCharacters(prev => isPagination ? [...prev, ...data.results] : data.results);
      setNextUrl(data.next);

    } catch (err: any) {
      setError(err.message || 'Ocurrió un error desconocido al cargar los datos.');
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchCharacters('https://swapi.dev/api/people/', false);
  }, []); 

  const handleLoadMore = () => {
    if (nextUrl) {
      fetchCharacters(nextUrl, true);
    }
  };

  return (
    <main className="container"> 
      
      {error && <ErrorMsg message={error} />}

      {characters.length > 0 && <CharacterList characters={characters} />}

      {loading && !loadingMore && <Loader />}

      <div className="pagination-container">
        {loadingMore && <Loader />}
        
        {!loading && !loadingMore && nextUrl && (
          <button
            onClick={handleLoadMore}
            className="btn-primary"
          >
            Siguiente Pagina
          </button>
        )}
        
        {!nextUrl && characters.length > 0 && !loading && (
          <p className="no-more-text">No hay más personajes para mostrar.</p>
        )}
      </div>
      
    </main>
  );
}