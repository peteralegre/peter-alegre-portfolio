"use client";
import styled from 'styled-components';
import MasonryGrid from './MasonryGrid';

export default function Home() {
	return (
		<StyledMain>
			<MasonryGrid />
		</StyledMain>
	);
}

const StyledMain = styled.main`
	margin: 24px 16px 0px 16px;
`;