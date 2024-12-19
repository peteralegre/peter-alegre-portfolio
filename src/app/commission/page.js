'use client';
import MasonryGrid from '../MasonryGrid';
import styled from 'styled-components';

const CommissionWork = () => {
	return (
		<StyledMason>
			<MasonryGrid />
		</StyledMason>
	);
};

export default CommissionWork;

const StyledMason = styled.div`
	padding: 100px 40px 40px 40px;
`;