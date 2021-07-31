import React from 'react';
import Message from './Message';

const SongDetails = ({ search, lyric, bio }) => {
	if (!lyric || !bio) return null;

	return (
		<>
			<h2>Detalles</h2>
			{bio.artists ? (
				<div className="song-artist">
					<h2>Información Artista</h2>
				</div>
			) : (
				<Message
					message={`Error: no existe el interprete ${search.song}`}
					backgroundColor="#dc3545"
				/>
			)}
			{bio.artists ? (
				<div className="song-artist">
					<h2>Información Artista</h2>
				</div>
			) : (
				<Message
					message={`Error: no existe el interprete ${search.artist}`}
					backgroundColor="#dc3545"
				/>
			)}
		</>
	);
};

export default SongDetails;
