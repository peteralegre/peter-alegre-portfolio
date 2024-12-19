'use client';
import MasonryGrid from '../MasonryGrid';
import styled from 'styled-components';
import NavBar from '../NavBar';

const CommissionWork = () => {
	return (
		<StyledMason>
            <NavBar />
			<MasonryGrid />
		</StyledMason>
	);
};

export default CommissionWork;

const StyledMason = styled.div`
	/* border: 1px solid red; */
`;