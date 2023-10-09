import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';

import ScreenProvider from '@/contexts/screen/ScreenProvider';

import StyledComponentsRegistry from '../lib/registry';
import './globals.css';

const quicksand = Quicksand({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
	title: 'Engetec',
	description: 'Plataforma de eventos',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-br">
			<body className={quicksand.className}>
				<StyledComponentsRegistry>
					<ScreenProvider>{children}</ScreenProvider>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
