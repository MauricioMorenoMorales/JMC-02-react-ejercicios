import React from 'react';

const SongDetails = ({ search, lyric, bio }) => {
	return (
		<div>
			<h2>Detalles</h2>
			<div className="song-artist">
				<h2>Información Artista</h2>
			</div>
			<div className="song-lyrics">
				<h2>Letra de la canción</h2>
			</div>
		</div>
	);
};

export default SongDetails;
