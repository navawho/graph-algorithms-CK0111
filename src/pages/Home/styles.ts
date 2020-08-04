import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
	height: 100vh;
	display: flex;
	align-items: stretch;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

export const GraphDiv = styled.div`
	background: white;
	border-radius: 30px;
	box-shadow: 0px 0px 20px rgba(1, 1, 1, 1);
	padding: 12px;
`;

export const Buttons = styled.div`
	display: flex;
	margin-bottom: 32px;

	button {
		background: white;
		border: 0;
		padding: 12px;
		border-radius: 20px;
		margin-left: 12px;

		&:first-child {
			margin-left: 0;
		}

		transition: 0.3s;

		&:hover {
			background: ${shade(0.2, '#FFF')};
		}
	}
`;
