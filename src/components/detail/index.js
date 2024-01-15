import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Detail() {
	let { state } = useLocation();
	const navigate = useNavigate();

	console.log(state);

  return (
    <div>
		<img src={ state.image } alt='site internet'/>
		<div>
			<h1>{ state.title }</h1>
			<p>{ state.description }</p>

			<h3>Technologies utilisées : </h3>
        <List>
        {state.techno.map((t, index) => {
            return <ListItem key={index}>{t},</ListItem>
          })}
        </List>

		<h3>Points Forts</h3>
		<Grid>
		{state.pointFort.map((pF, index) => {
            return <li key={index}>{pF}</li>
          })}
		</Grid>
		</div>
		<button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}

const List = styled.ul`
  display: flex;
  padding-bottom: 10px;
`;

const ListItem = styled.li`
  padding-right: 5px;
`;

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  gap: 15px;
  padding-bottom: 10px;
`;