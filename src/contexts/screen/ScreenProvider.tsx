'use client';

import React, { createContext } from 'react';

import { useResizeDetector } from 'react-resize-detector';

interface ScreenContextData {
	width?: number;
	height?: number;
}

interface ScreenProviderProps {
	children: React.ReactNode;
}

export const ScreenContext = createContext<ScreenContextData>(
	{} as ScreenContextData
);

const ScreenProvider = ({ children }: ScreenProviderProps) => {
	const { width, height, ref } = useResizeDetector({
		handleHeight: false,
	});

	return (
		<ScreenContext.Provider value={{ width, height }}>
			<div ref={ref}>{children}</div>
		</ScreenContext.Provider>
	);
};

export default ScreenProvider;
