import Image from 'next/image';
import Masonry, {
	ResponsiveMasonry
} from 'react-responsive-masonry';
import styled from 'styled-components';

//rearrange these to change the order of the photos
const photos = [
	'/photos/1 Street.jpg',
	'/photos/2 Street.jpg',
	'/photos/3 Street.jpg',
	'/photos/4 Street.jpg',
	'/photos/5 Street.jpg',
	'/photos/6 Street.jpg',
	'/photos/7 Street.jpg',
	'/photos/8 Portrait.jpg',
	'/photos/9 Portrait.jpg',
	'/photos/10 Portrait.jpg',
	'/photos/11 Portrait.jpg',
	'/photos/12 Portrait.jpg',
	'/photos/13 Portrait.jpg'
];

const MasonryGrid = () => {
	return (
		<ResponsiveMasonry
			columnsCountBreakPoints={{
				350: 1,
				750: 2,
				900: 3
			}}
		>
			<Masonry gutter="12px">
				{photos.map((image, i) => (
					<ImageContainer key={i}>
						<Image
							src={image}
							layout="responsive"
							width={1000}
							height={600}
							style={{
								width: '100%',
								display: 'block'
							}}
							alt=""
						/>
					</ImageContainer>
				))}
			</Masonry>
		</ResponsiveMasonry>
	);
};

export default MasonryGrid;

const ImageContainer = styled.div`
	overflow: hidden;
/* 
	@keyframes pulse {
		from,
		to {
			scale: 1;
		}
		50% {
			scale: 1.05;
		}
	} */

	/* :hover {
		animation: pulse 800ms ease-in-out;
	} */
`;