'use client';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const About = () => {
	return (
		<AboutContainer>
			<AboutContent>
				<Headshot>
					<Image
						src="/photos/Polaroid Self Portrait Exhibit.jpg"
						alt="Two Polaroids headshots of Peter Alegre"
						width={1000}
						height={600}
					/>
				</Headshot>
				<ContactContainer>
					<SocialLink
						href="mailto:alegrep@bxscience.com"
						target="_blank"
					>
						<TextContainer>Email</TextContainer>
					</SocialLink>
					<SocialLink
						href="https://www.instagram.com/peteralegre/"
						target="_blank"
					>
						<TextContainer>
							Instagram
						</TextContainer>
					</SocialLink>
				</ContactContainer>
				<TextContainer>
					<Paragraph>
						Peter Alegre is a NYC based
						photographer
					</Paragraph>
				</TextContainer>
			</AboutContent>
		</AboutContainer>
	);
};

export default About;

const AboutContainer = styled.div`
	/* display: flex;
	justify-content: flex-end; */
`;

const NavBarContainer = styled.div`
	/* border: 2px solid blue; */
	display: flex;
	justify-content: flex-end;
`;

const AboutContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 66vw;
	margin: auto;

	@media screen and (max-width: 750px) {
		width: 100vw;
	}
`;

const Headshot = styled.div`
	width: 750px;
	height: 600px;

	@media screen and (max-width: 750px) {
		width: 500px;
		height: 400px;
	}
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	margin: 0 8em 0 8em;

	@media screen and (max-width: 750px) {
		width: 80vw;
	}
	@media screen and (min-width: 1440px) {
		width: 40vw;
	}
`;

const Paragraph = styled.div`
	padding: 2em 0 2em 0;
`;

const ContactContainer = styled.div`
	display: flex;
	width: 100vw;
	align-items: center;
	flex-direction: column;
`;

const SocialLink = styled.a`
	font-family: 'CeraPro', sans-serif;
	font-size: 24px;
	text-decoration: none;
	color: black;
`;
