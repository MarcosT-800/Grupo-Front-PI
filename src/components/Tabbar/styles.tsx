import styled from 'styled-components';

import { AiOutlineUserAdd } from 'react-icons/ai';
import { BiSolidSchool } from 'react-icons/bi';
import { BsEnvelopePlus } from 'react-icons/bs';

type TabbarProps = {
	selected: boolean;
};

export const OptionMenu = styled.p<TabbarProps>`
	color: ${(props) => (props.selected ? '#ef0037' : '#9f9f9f')};
	font-weight: ${(props) => (props.selected ? 'bold' : '500')};
`;
export const IconUser = styled(AiOutlineUserAdd)<TabbarProps>`
	color: ${(props) => (props.selected ? '#ef0037' : '#9f9f9f')};
`;
export const IconInvite = styled(BsEnvelopePlus)<TabbarProps>`
	color: ${(props) => (props.selected ? '#ef0037' : '#9f9f9f')};
`;
export const IconComission = styled(BiSolidSchool)<TabbarProps>`
	color: ${(props) => (props.selected ? '#ef0037' : '#9f9f9f')};
`;
