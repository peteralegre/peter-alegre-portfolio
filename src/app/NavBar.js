import Link from 'next/link';
import React from 'react';

const NavBar = () => {
	return (
		<>
			<Link href="/">Work</Link>
			<Link href="/about">About</Link>
		</>
	);
};

export default NavBar;
