'use client';

import React from 'react';
import {
	Navbar,
	NavbarContent,
	NavbarItem,
	Link
} from '@nextui-org/react';
import styled from 'styled-components';

const NavBar = () => {
	return (
		<NavContainer>
			<StyledNavbar shouldHideOnScroll isBordered>
				<StyledNavbarContent>
					<StyledNavbarItem>
						<Link href="/work">Work</Link>
					</StyledNavbarItem>
					<StyledNavbarItem isActive>
						<Link href="/about">About</Link>
					</StyledNavbarItem>
				</StyledNavbarContent>
			</StyledNavbar>
		</NavContainer>
	);
};

export default NavBar;

const NavContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: 0px;
	width: 20vw;
	height: fit-content;
`;

const StyledNavbar = styled(Navbar)``;

const StyledNavbarContent = styled(NavbarContent)`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;
`;

const StyledNavbarItem = styled(NavbarItem)`
	list-style-type: none;
	a {
		color: #000; 
		text-decoration: none;
		font-size: 2rem; 
		/* -webkit-text-stroke: 1px #d3d3d3; */
		transition: color 0.3s ease;
		text-shadow: 3px 3px 3px #000;
		
		&:hover {
			color: #d3d3d3;
			-webkit-text-stroke: 1px #000; /* Border around the text */
		}
	}
`;
