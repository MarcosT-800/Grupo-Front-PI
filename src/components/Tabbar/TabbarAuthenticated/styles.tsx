import styled from 'styled-components';

import { AiOutlineStar } from 'react-icons/ai';
import { BiBrain, BiSolidSchool } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { ImFilesEmpty } from 'react-icons/im';
import { MdDateRange } from 'react-icons/md';
import { TfiMenuAlt } from 'react-icons/tfi';
import { TfiTimer } from 'react-icons/tfi';

type TabbarProps = {
	selected: boolean;
};

export const OptionMenu = styled.p<TabbarProps>`
	color: ${(props) => (props.selected ? '#ef0037' : '#9f9f9f')};
	font-weight: ${(props) => (props.selected ? 'bold' : '500')};
`;
export const IconMenu = styled(TfiMenuAlt)<TabbarProps>`
	color: ${(props) => (props.selected ? '#ef0037' : '#9f9f9f')};
`;
export const IconEvent = styled(AiOutlineStar)<TabbarProps>`
	color: ${(props) => (props.selected ? '#ef0037' : '#9f9f9f')};
`;
export const IconDate = styled(MdDateRange)<TabbarProps>`
	color: ${(props) => (props.selected ? '#ef0037' : '#9f9f9f')};
`;
export const IconFiles = styled(ImFilesEmpty)<TabbarProps>`
	color: ${(props) => (props.selected ? '#ef0037' : '#9f9f9f')};
`;
export const IconActivities = styled(BiBrain)<TabbarProps>`
	color: ${(props) => (props.selected ? '#ef0037' : '#9f9f9f')};
`;
export const IconUsers = styled(FiUsers)<TabbarProps>`
	color: ${(props) => (props.selected ? '#ef0037' : '#9f9f9f')};
`;
export const IconClasses = styled(BiSolidSchool)<TabbarProps>`
	color: ${(props) => (props.selected ? '#ef0037' : '#9f9f9f')};
`;
export const IconSection = styled(TfiTimer)<TabbarProps>`
	color: ${(props) => (props.selected ? '#ef0037' : '#9f9f9f')};
`;
