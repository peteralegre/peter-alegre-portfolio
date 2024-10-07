import { Inter } from 'next/font/google';
import NavBar from './NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Peter Alegre',
	description: 'Photography Portfolio'
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<NavBar />
				<main>{children}</main>
			</body>
		</html>
	);
}
