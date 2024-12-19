'use client';
import MasonryGrid from '../MasonryGrid';
import styled from 'styled-components';

const PersonalWork = () => {
	return (
		<StyledMason>
			<MasonryGrid />
		</StyledMason>
	);
};

export default PersonalWork;

const StyledMason = styled.div`
	padding: 100px 40px 40px 40px;
`;

const NavBarContainer = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const MasonryGridContainer = styled.div``;
