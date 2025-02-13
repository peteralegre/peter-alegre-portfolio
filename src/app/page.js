'use client';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

export default function Home() {
	const [imageSrc, setImageSrc] = useState('/photos/4 Street.jpg');
	const [imageSize, setImageSize] = useState({ width: 1200, height: 700 });

	useEffect(() => {
		const updateImage = () => {
			if (window.innerWidth < 800) {
				setImageSrc('/personal/landscapeBirdsSky.jpg');
				setImageSize({ width: 750, height: 1000 });
			} else {
				setImageSrc('/photos/4 Street.jpg');
				setImageSize({ width: 1200, height: 700 });
			}
		};

		updateImage();
		window.addEventListener('resize', updateImage);
		return () => window.removeEventListener('resize', updateImage);
	}, []);

	return (
		<StyledMain>
			<HeroImage
				src={imageSrc}
				alt="Dynamic Image"
				width={imageSize.width}
				height={imageSize.height}
			/>
		</StyledMain>
	);
}

const StyledMain = styled.main`
	display: flex;
`;

const HeroImage = styled(Image)`
	margin: auto;
	box-shadow: 6px 5px 20px -4px rgba(0,0,0,0.75);
	margin-top: 10px;
`;
