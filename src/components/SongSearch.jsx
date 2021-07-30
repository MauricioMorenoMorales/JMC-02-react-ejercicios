import React, { useState, useEffect } from 'react';
import { helpHttp } from '../helpers/helpHttp';
import Loader from './Loader';
import SongDetails from './SongDetails';
import SongForm from './SongForm';

const SongSearch = () => {
	const [search, setSearch] = useState(null);
	const [lyric, setLyric] = useState(null);
	const [bio, setBio] = useState(null);
	const [loading, setLoading] = useState(false);

	//! El async await va dentro no fuera
	useEffect(() => {
		if (search === null) return;
		console.log(search);

		const fetchData = async function () {
			const { artist, song } = search;

			const artistUrl = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
			const songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

			console.log(artistUrl, songUrl);

			setLoading(true);
			const [artistResponse, songResponse] = Promise.all([
				helpHttp().get(artistUrl),
				helpHttp().get(songUrl),
			]);
			console.log(artistResponse, songResponse);
			setBio(artistResponse);
			setLyric(songResponse);
			setLoading(true);
		};

		fetchData();
	}, [search]);

	const handleSearch = data => {
		setSearch(data);
	};

	return (
		<div>
			<h2>SongSearch</h2>
			{loading && <Loader />}
			<SongForm handleSearch={handleSearch} />
			<SongDetails search={search} bio={bio} lyric={lyric} />
		</div>
	);
};

export default SongSearch;

/**Este componente es un ejercicio para usar una api externa que buscara
  canciones y artistas UwU
 */
