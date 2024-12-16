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
						<Link href="/">Work</Link>
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
	`;

const StyledNavbar = styled(Navbar)`
	justify-content: center;
	align-items: center;
	padding: 1rem;
	padding-top: 5rem;
	position: relative; /* Necessary for the absolute positioning of the pseudo-element */
	width: 100%;

	// Add a pseudo-element with a gradient to the bottom of the navbar
	&:before {
		content: '';
		position: absolute;
		bottom: 0; 
		left: 0;
		right: 0;
		height: 2px; /* Height of the border */
		background: linear-gradient(
			to right,
			transparent,
			#000 50%,
			transparent
		); /* Fading effect */
	}
`;

const StyledNavbarContent = styled(NavbarContent)`
	display: flex;
	justify-content: center; 
	align-items: center; 
	gap: 2rem; /* Adjust spacing between items */
`;

const StyledNavbarItem = styled(NavbarItem)`
	list-style-type: none;
	a {
		color: #000; /* Example: change link color */
		text-decoration: none;
		font-size: 1.3rem; /* Adjust font size */

		&:hover {
			color: #f0a500; /* Example: hover effect */
		}
	}
`;
