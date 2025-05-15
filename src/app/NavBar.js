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
						<StyledLink href="/commission">
							Commission
						</StyledLink>
					</StyledNavbarItem>
					<StyledNavbarItem>
						<StyledLink href="/personal">
							Personal
						</StyledLink>
					</StyledNavbarItem>
					<StyledNavbarItem isActive>
						<StyledLink href="/about">
							About
						</StyledLink>
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
	-webkit-text-stroke: 0.2px #d3d3d3;
`;

const StyledLink = styled(Link)`
	list-style-type: none;
	font-size: 2rem;
	text-decoration: none;
	color: #000;
	transition: color 0.3s ease;
	margin-left: 1rem;
	margin-right: 1rem;


	&:hover {
		color: #d3d3d3;
		-webkit-text-stroke: 1px #000; /* Border around the text */
	}

	&:focus {
    outline: none;
  }

	/* Media queries for font sizes */
	@media (max-width: 800px) {
		font-size: 1rem; /* Less than 800px */
	}
	@media (min-width: 801px) and (max-width: 1248px) {
		font-size: 1.5rem; /* Between 801px and 1248px */
	}
	@media (min-width: 1249px) {
		font-size: 2rem; /* Larger than 1248px */
	}
`;

const StyledNavbar = styled(Navbar)``;

const StyledNavbarContent = styled(NavbarContent)`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-right: 1rem;

	@media (max-width: 800px) {
		gap: 0rem;
	}
	@media (min-width: 801px) and (max-width: 1248px) {
		gap: 1rem;
	}
	@media (min-width: 1249px) {
		gap: 2rem;
	}
`;

const StyledNavbarItem = styled(NavbarItem)`
	list-style-type: none;
`;
