'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const About = () => {
	const [imageSrc, setImageSrc] = useState(
		'/photos/Polaroid Self Portrait Exhibit.jpg'
	);
	const [imageSize, setImageSize] = useState({
		width: 1000,
		height: 600
	});

	useEffect(() => {
		const updateImage = () => {
			if (window.innerWidth < 800) {
				setImageSrc(
					'/photos/aboutProfilePic.jpg'
				);
				setImageSize({ width: 500, height: 500 });
			} else {
				setImageSrc('/photos/Polaroid Self Portrait Exhibit.jpg');
				setImageSize({ width: 1000, height: 600 });
			}
		};

		updateImage();
		window.addEventListener('resize', updateImage);
		return () =>
			window.removeEventListener(
				'resize',
				updateImage
			);
	}, []);

	return (
		<AboutContainer>
			<AboutContent>
				<Headshot>
					<Image
						src={imageSrc}
						alt="Two Polaroids headshots of Peter Alegre"
						width={imageSize.width}
						height={imageSize.height}
						style={{ width: '100%', height: 'auto' }}
					/>
				</Headshot>
				<ContactContainer>
					<SocialLink
						href="https://www.instagram.com/peteralegre/"
						target="_blank"
					>
						<TextContainer>
							Instagram
						</TextContainer>
					</SocialLink>
					<StyledEmail>
						forpeteralegre@gmail.com
					</StyledEmail>
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
	margin: 10vh auto 10vh auto;
	
	@media screen and (max-width: 750px) {
		margin: 5vh auto 5vh auto;
	}	
`;

const StyledEmail = styled.div`
	font-family: 'CeraPro', sans-serif;
	font-size: 24px;
	margin-top: 1rem;
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
