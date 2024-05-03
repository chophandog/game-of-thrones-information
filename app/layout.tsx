import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Game of Thrones Quotes",
	description: "by Chophandog",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={outfit.className}>
				<Link href={`/`} className="flex">
					<header>home</header>
				</Link>
				{children}
			</body>
		</html>
	);
}
