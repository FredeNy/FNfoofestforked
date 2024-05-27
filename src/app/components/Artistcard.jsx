import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bowlby_One } from 'next/font/google';

const BowlbyOne = Bowlby_One({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export default function LineUp({ searchParams }) {
  const [bands, setBands] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://yielding-cooperative-tarsal.glitch.me/bands`);
        const data = await response.json();
        setBands(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  if (loading) return <p>Loading...</p>;
  if (!bands) return <p>No bands data</p>;

  // Filtrering af bands efter valgt genre
  const filteredBands = selectedGenre === 'All' ? bands : bands.filter((band) => band.genre === selectedGenre);

  // Gruppering af bands efter genre
  const groupedByGenre = bands.reduce((acc, band) => {
    if (!acc[band.genre]) {
      acc[band.genre] = [];
    }
    acc[band.genre].push(band);
    return acc;
  }, {});

  // Sortering af genrer
  const sortedGenres = Object.keys(groupedByGenre).sort((a, b) => a.localeCompare(b));

  return (
    <section>

      {/* Dropdown for valg af genre */}
      <div className="flex justify-center items-center h-full">
        <div className="m-4">
          <label htmlFor="genre" className="text-Hotpink text-2xl sm:text-3xl mb-3 mr-4 font-semibold">Choose a genre:</label>
          <select
            id="genre"
            name="genre"
            className="rounded-lg p-2 border-2 border-Hotpink"
            onChange={handleGenreChange}
            value={selectedGenre}
          >
            <option value="All">All genres</option>
            {sortedGenres.map((genre) => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Bands opdelt efter genre */}
      {filteredBands.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6 md:gap-12 justify-center max-w-6xl mx-auto p-8 sm:p-12">
        {filteredBands.map((band) => (
          <div key={band.name} className="flex flex-col">
            <Link href={`/lineup/${band.slug}`} prefetch={false}>
              <div className="border-2 border-Hotpink rounded-lg cursor-pointer bg-Darkblue hover:scale-105 transition-transform duration-150 hover:bg-Navyblue">
                <div className="w-full h-64 sm:h-72 md:h-80 relative">
                  <Image
                    alt="Artist presentation"
                    src={band.logo.startsWith("http") ? band.logo : `https://yielding-cooperative-tarsal.glitch.me/logos/${band.logo}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-2 sm:p-4">
                  <p className="text-Hotpink mt-2 sm:mt-5 text-lg sm:text-2xl font-medium">{band.genre}</p>
                  <p className="text-White text-xl sm:text-3xl font-bold uppercase mb-1 sm:mb-2">{band.name}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      ) : (
        <p className="text-White">No bands found for the selected genre.</p>
      )}
    </section>
  );
}
