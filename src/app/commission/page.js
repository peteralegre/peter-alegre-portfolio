'use client';
import { MasonryPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/masonry.css';
import styled from 'styled-components';
import commission from './commissionPhotos';

const CommissionWork = () => {
	return (
		<StyledMason>
			<MasonryPhotoAlbum photos={commission} />
		</StyledMason>
	);
};

export default CommissionWork;

const StyledMason = styled.div`
	padding: 100px 40px 40px 40px;
`;
