import Image from 'next/image';
import { MasonryPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/masonry.css';
import photos from './photos';
import styled from 'styled-components';

const MasonryGrid = () => {
	return (
		<MasonryGridContainer>
			<MasonryPhotoAlbum photos={photos} />
		</MasonryGridContainer>
	);
};

export default MasonryGrid;

const MasonryGridContainer = styled.div`
	/* margin: 0 32px 0 32px; */
`;
