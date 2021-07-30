import React from 'react';
import Message from './Message'

const SongDetails = ({ search, lyric, bio }) => {
	if(!lyric || !bio) return null

	return (
		<div>
			<h2>Detalles</h2>
			<Message />
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
