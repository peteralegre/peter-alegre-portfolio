'use client';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Contact = () => {
	return (
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
				<TextContainer>Instagram</TextContainer>
			</SocialLink>
		</ContactContainer>
	);
};

export default Contact;

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

const TextContainer = styled.div`
	padding: 0.5em 0.5em 0.5em 0.5em;
	margin: 0.25em 0 0.25em 0%;
	border: 2px solid #353839;
	border-radius: 5px;
	transition: transform 0.2s ease;

	&:hover {
		transform: scale(1.05);
	}
`;