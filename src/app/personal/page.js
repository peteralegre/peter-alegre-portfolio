'use client';
import { MasonryPhotoAlbum } from 'react-photo-album';
import styled from 'styled-components';
import photos from '../photos';
import MasonryGrid from '../MasonryGrid';


const PersonalWork = () => {
	return (
		<StyledMason>
			<MasonryGrid />
			{/* <MasonryPhotoAlbum photos={photos} /> */}
		</StyledMason>
	);
};

export default PersonalWork;

const StyledMason = styled.div`
	padding: 100px 40px 40px 40px;
`;
