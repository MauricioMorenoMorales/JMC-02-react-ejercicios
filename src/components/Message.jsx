import React from 'react';

const Message = ({ message, backgroundColor }) => {
	const styles = {
		padding: '1rem',
		marginBottom: '1rem',
		textAlign: 'center',
		backgroundColor,
		color: '#fff',
		fontWeight: 'bold',
	};
	return (
		<div style={styles}>
			<p>{message}</p>
		</div>
	);
};

export default Message;
