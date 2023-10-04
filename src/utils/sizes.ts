// @ts-nocheck
import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '../../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);

export const getBreakpointValue = (value: string | undefined): number => {
	if (!value || !fullConfig.theme?.screens?.[value]) {
		return 0;
	}

	return +fullConfig.theme.screens[value].slice(
		0,
		fullConfig.theme.screens[value].indexOf('px')
	);
};
