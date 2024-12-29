'use client';
import styled from 'styled-components';

export default function Home() {
	return (
		<StyledMain/>
	);
}

const StyledMain = styled.main`
	width: 100%; 
	height: 100vh; 
	display: flex;
	background-image: url('/photos/4 Street.jpg');
	background-size: cover; 
	background-position: center;
	background-repeat: no-repeat;
`;

