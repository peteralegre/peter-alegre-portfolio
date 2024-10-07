import Image from 'next/image';
import { MasonryPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/masonry.css';
import photos from './photos';

const MasonryGrid = () => {
	return (
		<>
			<MasonryPhotoAlbum photos={photos} />
		</>
	);
};

export default MasonryGrid;
