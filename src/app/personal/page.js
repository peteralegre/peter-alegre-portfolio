'use client';
import { MasonryPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/masonry.css';
import styled from 'styled-components';
import photos from '../photos';


const PersonalWork = () => {
	return (
		<StyledMason>
			<MasonryPhotoAlbum photos={photos} columns={4}/>
		</StyledMason>
	);
};

export default PersonalWork;

const StyledMason = styled.div`
	padding: 100px 40px 40px 40px;
`;
