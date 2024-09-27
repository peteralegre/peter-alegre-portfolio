import Image from 'next/image';
import NavBar from './NavBar';
import MasonryGrid from './MasonGrid';

export default function Home() {
	return (
		<main>
			<NavBar/>
			<MasonryGrid/>
		</main>
	);
}
