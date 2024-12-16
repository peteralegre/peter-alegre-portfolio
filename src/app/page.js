'use client';
import styled from 'styled-components';
import NavBar from './NavBar';

export default function Home() {
	return (
		<StyledMain>
			<StyledText>Peter Alegre</StyledText>
			<NavBar />
		</StyledMain>
	);
}

const StyledMain = styled.main`
	position: relative; /* Ensure main acts as the positioning context */
	width: 100%; /* Adjust as needed */
	height: 100vh; /* Adjust as needed */
	display: flex;
	justify-content: right;
	background-image: url('/photos/4 Street.jpg');
	background-size: cover; 
	background-position: center;
	background-repeat: no-repeat;
`;

const StyledText = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	padding: 20px;
	color: #fff;
	font-size: 2.6rem;
	text-shadow: 5px 5px 5px #000;
`;
