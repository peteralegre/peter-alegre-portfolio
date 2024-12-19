'use client';
import MasonryGrid from '../MasonryGrid';
import styled from 'styled-components';
import NavBar from '../NavBar';

const PersonalWork = () => {
	return (
		<StyledMason>
			<NavBarContainer>
				<NavBar />
			</NavBarContainer>
			<MasonryGridContainer>
				<MasonryGrid />
			</MasonryGridContainer>
		</StyledMason>
	);
};

export default PersonalWork;

const StyledMason = styled.div`
	/* border: 1px solid red; */
`;

const NavBarContainer = styled.div`
	/* border: 2px solid blue; */
	display: flex;
	justify-content: flex-end;
`;

const MasonryGridContainer = styled.div`
	padding: 100px 40px 40px 40px;
`;
