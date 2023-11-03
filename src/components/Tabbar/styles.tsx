import styled from 'styled-components';

type TabbarProps = {
	selected: boolean;
};

export const OptionMenu = styled.p<TabbarProps>`
	color: ${(props) => (props.selected ? '#EF0037' : 'rgb(156 163 175)')};
	font-weight: ${(props) => (props.selected ? 'bold' : '500')};
`;
