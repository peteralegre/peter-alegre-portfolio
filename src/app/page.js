'use client';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

export default function Home() {
	const [imageSrc, setImageSrc] = useState(
		'/photos/4 Street.jpg'
	);
	const [imageSize, setImageSize] = useState({
		width: 1200,
		height: 700
	});

	useEffect(() => {
		const updateImage = () => {
			if (window.innerWidth < 800) {
				setImageSrc(
					'/photos/clothingCollection.JPG'
				);
				setImageSize({ width: 360, height: 543 });
			} else {
				setImageSrc('/photos/4 Street.jpg');
				setImageSize({ width: 1200, height: 700 });
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
	width: 100%;
	height: 100%; /* Set a fixed height for demonstration */
	overflow-x: auto;
`;

const HeroImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (min-width: 768px) { /* Applies styles for tablets and desktops */
    width: auto;
    height: auto;
    margin: auto;
    margin-top: 10px;
    box-shadow: 6px 5px 20px -4px rgba(0, 0, 0, 0.75);
  }
`;
