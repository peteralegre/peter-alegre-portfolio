'use client';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const About = () => {
	return (
		<AboutContainer>
			<Headshot>
				<Image
					src="/photos/Polaroid Self Portrait Exhibit.jpg"
					alt="PLACEHOLDER"
          width={1000}
          height={600}
				/>
			</Headshot>

			<TextContainer>
				<Paragraph>
					I am a software developer & photographer.<br/>
					I have a background in startups & healthtech in New York City. I have a passion for portrait photography and I love
					working with newer technologies solving problems through code. If I find the intersection of software development and photography, that would be my dream career.
				</Paragraph>

				<Paragraph>
					I always love learning about
					software engineering, specifically web development. I&apos;m a fullstack developer with a particular interest in making things that are beautiful and user-friendly.
				</Paragraph>
			</TextContainer>
		</AboutContainer>
	);
};

export default About;

const AboutContainer = styled.div`
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