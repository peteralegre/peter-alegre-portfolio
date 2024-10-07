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
		<>
			<StyledNavbar shouldHideOnScroll>
				<StyledNavbarContent>
					<StyledNavbarItem>
						<Link href="#">Work</Link>
					</StyledNavbarItem>
					<StyledNavbarItem isActive>
						<Link href="/about">About</Link>
					</StyledNavbarItem>
					<StyledNavbarItem>
						<Link href="/contact">Contact</Link>
					</StyledNavbarItem>
				</StyledNavbarContent>
			</StyledNavbar>
		</>
	);
};

export default NavBar;

const StyledNavbar = styled(Navbar)`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #333; /* Example styling */
	padding: 1rem;
`;

const StyledNavbarContent = styled(NavbarContent)`
	display: flex;
	gap: 1.5rem; /* Adjust spacing between items */
`;

const StyledNavbarItem = styled(NavbarItem)`
	list-style-type: none;
	a {
		color: #fff; /* Example: change link color */
		text-decoration: none;

		&:hover {
			color: #f0a500; /* Example: hover effect */
		}
	}
`;
