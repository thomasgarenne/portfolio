import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Detail() {
	let { state } = useLocation();
	const navigate = useNavigate();

  return (
    <div>
		<img src={ state.image } alt='site internet'/>
		<div>
			<h1>{ state.title }</h1>
			<p>{ state.description }</p>
			<ul>
			{state.techno.map((t, index) => {
            	return <li key={index}> {t}</li>
         	})}
			</ul>
		</div>
		<button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}
