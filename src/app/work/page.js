'use client';
import MasonryGrid from '../MasonryGrid';
import styled from 'styled-components';
import NavBar from '../NavBar';

const Work = () => {
	return (
		<StyledMason>
			<NavBarContainer>
				<StyledNavBar />
			</NavBarContainer>
            <MasonryGridContainer>
                <MasonryGrid />
			{/* <StyledMasonryGrid /> */}
            </MasonryGridContainer>
		</StyledMason>
	);
};

export default Work;

const StyledMason = styled.div`
	/* border: 1px solid red; */
`;

const NavBarContainer = styled.div`
	/* border: 2px solid blue; */
    display: flex;
    justify-content: flex-end;
`;

const StyledNavBar = styled(NavBar)`
	/* border: 1px solid green; */
`;

const MasonryGridContainer = styled.div`
    padding: 100px 40px 40px 40px;
`;
