import styled from "styled-components";

export const Button = styled.button`
	display: flex;
	padding: 12px 16px;
	justify-content: center;
	align-items: center;
	gap: 6px;
	align-self: stretch;
	border-radius: 12px;
	background: #d5ccee;
	width: 100%;

	&:active {
		background: #b8a9d1;
	}
`;
