'use client';

import GlobalStyles from './globalStyles';

import { useEffect, useState } from 'react';

const RootLayout = ({ children }) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		// This ensures the component is mounted and styled-components can avoid FOUC
		setIsMounted(true);
	}, []);

	// Prevent rendering until the app is fully mounted to avoid FOUC
	if (!isMounted) {
		return null;
	}

	return (
		<html lang="en">
			<head>
				{/* You can add meta tags, link to fonts, etc. in the <head> */}
			</head>
			<body>
				<GlobalStyles />
				<main>{children}</main>
			</body>
		</html>
	);
};

export default RootLayout;
