import React from 'react';

function Card({blog}) {
	return(
		<div className="card">
			<img className="image" alt={blog.article} src={blog.imgPath} />
			<div>
				<h2>{blog.article}</h2>
				<p>{blog.description}</p>
			</div>
		</div>
	);
}

export default Card;