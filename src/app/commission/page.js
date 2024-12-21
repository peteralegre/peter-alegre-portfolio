'use client';
import { MasonryPhotoAlbum } from 'react-photo-album';
import MasonryGrid from '../MasonryGrid';
import styled from 'styled-components';
import photos from '/photos/personal';

const CommissionWork = () => {
	return (
		<StyledMason>
			{/* <MasonryGrid /> */}
			<MasonryPhotoAlbum photos={photos} />
		</StyledMason>
	);
};

export default CommissionWork;

const StyledMason = styled.div`
	padding: 100px 40px 40px 40px;
`;