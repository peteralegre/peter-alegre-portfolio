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
			<StyledLink href="/">Peter Alegre</StyledLink>
			<StyledNavbar shouldHideOnScroll isBordered>
				<StyledNavbarContent>
					<StyledNavbarItem>
						<Link href="/commission">
							Commission
						</Link>
					</StyledNavbarItem>
					<StyledNavbarItem>
						<Link href="/personal">
							Personal
						</Link>
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
	justify-content: space-between;
	align-items: center;
	top: 0;
	left: 0;
	padding: 0px;
	width: 100vw;
	height: fit-content;
	backdrop-filter: blur(10px);
	background: transparent;
	/* position: absolute; */
	-webkit-text-stroke: .2px #d3d3d3;
`;

const StyledLink = styled(Link)`
	font-size: 2rem;
	padding-left: 1rem;
	text-decoration: none;
	color: #000;
	transition: color 0.3s ease;

	&:hover {
		color: #d3d3d3;
		-webkit-text-stroke: 1px #000; /* Border around the text */
	}
`;

const StyledNavbar = styled(Navbar)``;

const StyledNavbarContent = styled(NavbarContent)`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	padding-right: 1rem;
`;

const StyledNavbarItem = styled(NavbarItem)`
	list-style-type: none;
	a {
		color: #000;
		text-decoration: none;
		font-size: 2rem;
		/* -webkit-text-stroke: 1px #d3d3d3; */
		transition: color 0.3s ease;
		/* text-shadow: 3px 3px 3px #000; */

		&:hover {
			color: #d3d3d3;
			-webkit-text-stroke: 1px #000; /* Border around the text */
		}
	}
`;
