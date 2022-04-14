import styled from 'styled-components/native';

export const Container = styled.View`
	display: flex;
	padding-top: 22px;
	background: white;
`;

export const Card = styled.View`
	border: 3px solid black;
	margin: 0 0 10px 0;
	padding: 40px 0;
	display: flex;
	flex-direction: row;
`;

export const ItemName = styled.Text`
	padding: 10px;
	font-size: 18px;
	height: 44px;
	color: #A0522D;
	font-weight: 700;
`;

export const ItemPrice = styled.Text`
	font-size: 18px;
	font-weight: 900;
	color: green;
	margin-left: 10px;
`;