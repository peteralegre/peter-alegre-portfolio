import Image from 'next/image'
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";

const photos = [
  { src: "/photos/1 Street.jpg", width: 800, height: 600 },
  { src: "/photos/2 Street.jpg", width: 800, height: 900 },
  { src: "/photos/3 Street.jpg", width: 800, height: 900 },
  { src: "/photos/4 Street.jpg", width: 800, height: 900 },
  { src: "/photos/5 Street.jpg", width: 800, height: 900 },
  { src: "/photos/6 Street.jpg", width: 800, height: 900 },
  { src: "/photos/7 Street.jpg", width: 800, height: 900 },
  { src: "/photos/8 Portrait.jpg", width: 800, height: 900 },
  { src: "/photos/9 Portrait.jpg", width: 800, height: 900 },
  { src: "/photos/10 Portrait.jpg", width: 800, height: 900 },
  { src: "/photos/11 Portrait.jpg", width: 800, height: 900 },
  { src: "/photos/12 Portrait.jpg", width: 800, height: 900 },
  { src: "/photos/13 Portrait.jpg", width: 800, height: 900 },
  { src: "/photos/14 Aqueduct Racetrack Documentary.jpg", width: 800, height: 900 },
  { src: "/photos/15 Aqueduct Racetrack Documentary.jpg", width: 800, height: 900 },
  { src: "/photos/16 Aqueduct Racetrack Documentary.jpg", width: 800, height: 900 },
  { src: "/photos/17 Aqueduct Documentary.jpg", width: 800, height: 900 },
  { src: "/photos/18 Aqueduct Racetrack Documentary.jpg", width: 800, height: 900 },
  { src: "/photos/19 Aqueduct Documentary.jpg", width: 800, height: 900 },
  { src: "/photos/20 Aqueduct Documentary.jpg", width: 800, height: 900 },
  { src: "/photos/21 Aqueduct Documentary.jpg", width: 800, height: 900 },
  { src: "/photos/22 Aqueduct Documentary.jpg", width: 800, height: 900 },
  { src: "/photos/23 Aqueduct Documentary.jpg", width: 800, height: 900 },
  { src: "/photos/24 Aqueduct Documentary.jpg", width: 800, height: 900 },
  { src: "/photos/25 Aqueduct Documentary.jpg", width: 800, height: 900 },
  { src: "/photos/26 Grand Leaners  Vintage Store Profile.jpg", width: 800, height: 900 },
  { src: "/photos/27 Grand Leaners  Vintage Store Profile.jpg", width: 800, height: 900 },
  { src: "/photos/28 Grand Leaners  Vintage Store Profile.jpg", width: 800, height: 900 },
  { src: "/photos/29 Grand Leaners  Vintage Store Profile.jpg", width: 800, height: 900 },
  { src: "/photos/30 Grand Leaners  Vintage Store Profile.jpg", width: 800, height: 900 },
  { src: "/photos/31 Grand Leaners  Vintage Store Profile.jpg", width: 800, height: 900 },
];

const MasonryGrid = () => {
  return (
    <>
    <MasonryPhotoAlbum photos={photos} />

    </>
  )
}

export default MasonryGrid