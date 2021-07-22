import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import SongDetails from './SongDetails';
import SongForm from './SongForm';

const SongSearch = () => {
	const [search, setSearch] = useState(null);
	const [lyric, setLyric] = useState(null);
	const [bio, setBio] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleSearch = data => {
		console.log(data);
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
